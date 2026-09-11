import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    ChevronDown,
    Grid2X2,
    Menu,
    Search,
    ShoppingCart,
    UserRound,
    X,
} from 'lucide-react'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center gap-1 text-xs font-medium transition-colors ${isActive ? 'text-app-main' : 'text-slate-700 hover:text-app-main'
    }`

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [language, setLanguage] = useState<'EN' | 'AR'>('EN')
    const [search, setSearch] = useState('')

    const toggleLanguage = () => {
        const next = language === 'EN' ? 'AR' : 'EN'

        setLanguage(next)

        document.documentElement.dir = next === 'AR' ? 'rtl' : 'ltr'
        document.documentElement.lang = next === 'AR' ? 'ar' : 'en'
    }

    const closeMobileMenu = () => {
        setMenuOpen(false)
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
                    Gr<span className="text-app-light-blue">o</span>cery{' '}
                    <span className="text-app-gold">+</span>
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-5 lg:flex">
                    <NavLink to="/" className={navLinkClass} end>
                        Home
                    </NavLink>

                    <NavLink to="/products" className={navLinkClass}>
                        <Grid2X2 size={13} />
                        Categories
                    </NavLink>
                </nav>

                {/* Desktop search */}
                <form
                    role="search"
                    onSubmit={(event) => event.preventDefault()}
                    className="hidden min-w-0 flex-1 md:flex"
                >
                    <div className="flex h-9 w-full overflow-hidden rounded-md border border-slate-200 bg-white">
                        {/* Category selector */}
                        <button
                            type="button"
                            className="hidden shrink-0 items-center gap-1 border-e border-slate-200 bg-slate-100 px-3 text-[10px] font-semibold text-slate-700 lg:flex"
                        >
                            All Categories
                            <ChevronDown size={12} />
                        </button>

                        {/* Search input */}
                        <label htmlFor="desktop-search" className="sr-only">
                            Search for items
                        </label>

                        <input
                            id="desktop-search"
                            type="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
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
                        to="/login"
                        className="inline-flex items-center gap-1.5 rounded-md bg-app-main px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-app-main/90"
                    >
                        <UserRound size={14} />
                        Sarah's Profile
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="ms-auto flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-4 lg:hidden">
                    <div className="flex flex-col gap-4">
                        {/* Mobile search */}
                        <form
                            role="search"
                            onSubmit={(event) => event.preventDefault()}
                            className="flex h-10 overflow-hidden rounded-md border border-slate-200"
                        >
                            <label htmlFor="mobile-search" className="sr-only">
                                Search for items
                            </label>

                            <input
                                id="mobile-search"
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
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
                                to="/products"
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
                                to="/login"
                                onClick={closeMobileMenu}
                                className="inline-flex w-fit items-center gap-1.5 rounded-md bg-app-main px-3 py-2 text-xs font-medium text-white"
                            >
                                <UserRound size={14} />
                                Sarah's Profile
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

