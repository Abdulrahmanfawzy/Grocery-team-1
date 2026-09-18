import FilterHeaderTitle from './FilterHeaderTitle'
import { Input } from '@/components'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchProduct = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = (searchValue: string) => {
    const params = new URLSearchParams(searchParams)

    if (searchValue) {
      params.set('search', searchValue)
      params.set('page', '1')
    } else {
      params.delete('search')
      params.set('page', '1')
    }
    setSearchParams(params)
  }
  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <FilterHeaderTitle title="Search Objects" />
      {/* Search Input */}
      <div className="flex h-14 w-full overflow-hidden rounded-[8px] border-2 border-app-main">
        <Input
          type="text"
          id="products-search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)

            if (e.target.value === '') {
              setSearchValue('')

              setSearchParams((prev) => {
                const params = new URLSearchParams(prev)
                params.delete('search')
                params.set('page', '1')
                return params
              })
            }
          }}
          className="focus:rounded-none focus-visible:ring-0  focus-visible:border-none fo"
          placeholder="Search your keyword..."
        />

        <button
          type="button"
          className="flex w-13 shrink-0 items-center justify-center bg-app-main text-white"
          onClick={() => handleSearch(searchValue)}
        >
          <Search className="size-7" />
        </button>
      </div>
    </div>
  )
}

export default SearchProduct
