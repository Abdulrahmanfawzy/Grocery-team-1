import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  ChevronDown,
  Grid2X2,
  LogOut,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from 'lucide-react'

import { useAppDispatch, useAppSelector } from '@/app/hook'
import { Button } from '../ui'
import { logout } from '@/features/auth/store/authSlice'
import { useCategories } from '@/hooks/useCategories'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex items-center gap-1 text-xs font-medium transition-colors ${isActive
    ? 'text-app-main'
    : 'text-slate-700 hover:text-app-main'
  }`

export function Navbar() {
  const navigate = useNavigate()

  // auth
  const { user, isAuthenticated } = useAppSelector(
    (store) => store.auth,
  )

  const dispatch = useAppDispatch()

  // categories
  const { data: categories } = useCategories()

  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN')
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null)

  const toggleLanguage = () => {
    const next = language === 'EN' ? 'AR' : 'EN'

    setLanguage(next)

    document.documentElement.dir = next === 'AR' ? 'rtl' : 'ltr'
    document.documentElement.lang = next === 'AR' ? 'ar' : 'en'
  }

  const closeMobileMenu = () => {
    setMenuOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (search.trim()) {
      navigate(
        `/products?search=${encodeURIComponent(search.trim())}`,
      )

      setSearch('')
      closeMobileMenu()
    }
  }

  const handleCategorySelect = (
    categoryId: number,
    categoryName: string,
  ) => {
    setSelectedCategory(categoryName)

    navigate(`/products?category_id=${categoryId}`)

    closeMobileMenu()
  }

  const handleClearCategory = () => {
    setSelectedCategory(null)

    navigate('/products')

    closeMobileMenu()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-[#f5fbfe]/95 backdrop-blur">
      {/* Main navbar */}
      <div className="box-container flex h-14 items-center gap-4 lg:h-16 lg:gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-lg font-extrabold tracking-tight text-app-main sm:text-xl"
        >
          Gr
          <span className="text-app-light-blue">o</span>
          cery <span className="text-app-gold">+</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>

          <NavLink to="/categories" className={navLinkClass}>
            <Grid2X2 size={13} />
            Categories
          </NavLink>
        </nav>

        {/* Desktop search */}
        <form
          role="search"
          onSubmit={handleSearch}
          className="hidden min-w-0 flex-1 md:flex"
        >
          <div className="flex h-9 w-full overflow-hidden rounded-md border border-slate-200 bg-white">
            {/* Category selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hidden h-full shrink-0 items-center gap-1 border-e border-slate-200 bg-slate-100 px-3 text-[10px] font-semibold text-slate-700 outline-none lg:flex"
                >
                  <span className="max-w-28 truncate">
                    {selectedCategory || 'All Categories'}
                  </span>

                  <ChevronDown size={12} />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-52 max-h-64 overflow-y-auto"
              >
                {/* All Categories */}
                <DropdownMenuItem
                  onClick={handleClearCategory}
                  className={`cursor-pointer text-xs ${!selectedCategory
                    ? 'bg-app-main/10 text-app-main font-medium'
                    : ''
                    }`}
                >
                  All Categories
                </DropdownMenuItem>

                {/* Categories */}
                {categories?.data?.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() =>
                      handleCategorySelect(
                        category.id,
                        category.name_en,
                      )
                    }
                    className={`cursor-pointer gap-2 text-xs ${selectedCategory === category.name_en
                      ? 'bg-app-main/10 text-app-main font-medium'
                      : ''
                      }`}
                  >
                    <img
                      src={category.image}
                      alt={category.name_en}
                      className="h-5 w-5 shrink-0 rounded object-cover"
                    />

                    <span className="truncate">
                      {category.name_en}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search input */}
            <label
              htmlFor="desktop-search"
              className="sr-only"
            >
              Search for items
            </label>

            <input
              id="desktop-search"
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search for items..."
              className="min-w-0 flex-1 bg-transparent px-3 text-xs outline-none placeholder:text-slate-300"
            />

            {/* Search button */}
            <button
              type="submit"
              aria-label="Search"
              className="flex w-10 shrink-0 items-center justify-center bg-app-main text-white transition-colors hover:bg-app-main/90"
            >
              <Search size={16} />
            </button>
          </div>
        </form>

        {/* Desktop actions */}
        <div className="ms-auto hidden items-center gap-4 lg:flex">
          {/* Cart */}
          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-app-main"
          >
            <ShoppingCart size={16} />
            My cart
          </Link>

          {/* Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-medium text-slate-500 hover:text-app-main"
            aria-label="Change language"
          >
            {language}
          </button>

          {/* Profile */}
          <Link
            to={isAuthenticated ? '/profile' : '/login'}
            className="inline-flex items-center gap-1.5 rounded-md bg-app-main px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-app-main/90"
          >
            {isAuthenticated ? (
              <>
                <UserRound size={14} />
                {user?.name}
              </>
            ) : (
              'Login'
            )}
          </Link>

          {/* Logout */}
          {isAuthenticated && (
            <Button
              onClick={() => {
                dispatch(logout())
                navigate('/login')
              }}
              variant="destructive"
              size="sm"
              className="h-10 text-xs"
            >
              <LogOut size={14} />
              logout
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="ms-auto flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() =>
            setMenuOpen((open) => !open)
          }
          aria-label={
            menuOpen ? 'Close menu' : 'Open menu'
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {/* Mobile search */}
            <form
              role="search"
              onSubmit={handleSearch}
              className="flex flex-col gap-2"
            >
              <div className="flex h-10 overflow-hidden rounded-md border border-slate-200">
                <label
                  htmlFor="mobile-search"
                  className="sr-only"
                >
                  Search for items
                </label>

                <input
                  id="mobile-search"
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search for items..."
                  className="min-w-0 flex-1 bg-white px-3 text-xs outline-none placeholder:text-slate-300"
                />

                <button
                  type="submit"
                  aria-label="Search"
                  className="flex w-10 shrink-0 items-center justify-center bg-app-main text-white"
                >
                  <Search size={15} />
                </button>
              </div>

              {/* Mobile category selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-[10px] font-semibold text-slate-700 outline-none"
                  >
                    <span className="truncate">
                      {selectedCategory ||
                        'All Categories'}
                    </span>

                    <ChevronDown size={12} />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  className="w-[calc(100vw-40px)] max-h-60 overflow-y-auto"
                >
                  {/* All Categories */}
                  <DropdownMenuItem
                    onClick={handleClearCategory}
                    className={`cursor-pointer text-xs ${!selectedCategory
                      ? 'bg-app-main/10 text-app-main font-medium'
                      : ''
                      }`}
                  >
                    All Categories
                  </DropdownMenuItem>

                  {/* Categories */}
                  {categories?.data?.map((category) => (
                    <DropdownMenuItem
                      key={category.id}
                      onClick={() =>
                        handleCategorySelect(
                          category.id,
                          category.name_en,
                        )
                      }
                      className={`cursor-pointer gap-2 text-xs ${selectedCategory ===
                        category.name_en
                        ? 'bg-app-main/10 text-app-main font-medium'
                        : ''
                        }`}
                    >
                      <img
                        src={category.image}
                        alt={category.name_en}
                        className="h-5 w-5 shrink-0 rounded object-cover"
                      />

                      <span className="truncate">
                        {category.name_en}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </form>

            {/* Mobile navigation */}
            <nav>
              <div className="flex flex-col gap-3">
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                  end
                >
                  Home
                </NavLink>

                <NavLink
                  to="/products"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  <Grid2X2 size={15} />
                  Categories
                </NavLink>
              </div>
            </nav>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Mobile actions */}
            <div className="flex flex-col gap-3">
              {/* Cart */}
              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 hover:text-app-main"
              >
                <ShoppingCart size={15} />
                My cart
              </Link>

              {/* Language */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 text-start text-xs font-medium text-slate-500 hover:text-app-main"
                aria-label="Change language"
              >
                {language}
              </button>

              {/* Profile */}
              <Link
                to={
                  isAuthenticated
                    ? '/profile'
                    : '/login'
                }
                onClick={closeMobileMenu}
                className="inline-flex w-fit items-center gap-1.5 rounded-md bg-app-main px-3 py-2 text-xs font-medium text-white"
              >
                <UserRound size={14} />

                {isAuthenticated
                  ? user?.name
                  : 'Login'}
              </Link>

              {/* Logout */}
              {isAuthenticated && (
                <Button
                  onClick={() => {
                    dispatch(logout())
                    navigate('/login')
                    closeMobileMenu()
                  }}
                  variant="destructive"
                  size="sm"
                  className="w-fit text-xs"
                >
                  <LogOut size={14} />
                  logout
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}