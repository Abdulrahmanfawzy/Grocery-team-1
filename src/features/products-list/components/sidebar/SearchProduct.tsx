import FilterHeaderTitle from './FilterHeaderTitle'
import { Input } from '@/components'
import { Search } from 'lucide-react'

const SearchProduct = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <FilterHeaderTitle title="Search Objects" />
      {/* Search Input */}
      <div className="flex h-14 w-full overflow-hidden rounded-[8px] border-2 border-app-main">
        <Input
          type="text"
          id="products-search"
          className="focus:rounded-none focus-visible:ring-0  focus-visible:border-none fo"
          placeholder="Search your keyword..."
        />

        <button
          type="button"
          className="flex w-13 shrink-0 items-center justify-center bg-app-main text-white"
        >
          <Search className="size-7" />
        </button>
      </div>
    </div>
  )
}

export default SearchProduct
