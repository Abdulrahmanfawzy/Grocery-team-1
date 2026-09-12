import { useState } from 'react'
import { Filter, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components'

export function CategoryFilter() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleFindProduct = () => {
    const value = search.trim()

    if (!value) {
      navigate('/products')
      return
    }

    navigate(`/products?search=${encodeURIComponent(value)}`)
  }

  return (
    <section className="box-container pt-7 sm:pt-8">
      <div
        className="flex items-center gap-2 rounded-xl border border-border-color bg-white 
      p-3 shadow-sm sm:p-4"
      >
        {/* Search */}
        <div
          className="flex h-9 min-w-0 flex-1 items-center rounded-lg border 
        border-border-color px-3"
        >
          <Search className="size-4 shrink-0 text-silver" aria-hidden="true" />

          <label htmlFor="category-search" className="sr-only">
            Search for products
          </label>

          <input
            id="category-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleFindProduct()
              }
            }}
            placeholder="Search on Category"
            className="min-w-0 flex-1 bg-transparent px-2 text-xs text-sidebar-color 
            outline-none placeholder:text-silver"
          />
        </div>

        {/* Divider */}
        <div className="hidden h-7 w-px bg-border-color sm:block" />

        {/* Filter */}
        <Button type="button" variant="ghost" size="icon" aria-label="Filter products">
          <Filter className="size-4" />
        </Button>

        {/* Search */}
        <Button type="button" className="h-9 px-4 text-xs" onClick={handleFindProduct}>
          Find Product
        </Button>
      </div>
    </section>
  )
}
