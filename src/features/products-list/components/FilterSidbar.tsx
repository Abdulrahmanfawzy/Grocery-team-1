import { Input } from '@/components'
import { Slider } from '@/components/ui/slider'
import { Apple, Croissant, Fish, Milk, Drumstick, Search, X } from 'lucide-react'
import { useState } from 'react'

const FilterSidbar = ({ closeSidBar }: { closeSidBar?: () => void }) => {
  const [priceRange, setPriceRange] = useState([100, 1000])
  const handlePriceChange = (value: number | readonly number[]) => {
    if (Array.isArray(value)) {
      setPriceRange([...value])
    }
  }
  return (
    <aside className="md:rounded-md w-full bg-app-light-gray">
      {/* icon for close Sidbar in mobile */}
      <button onClick={closeSidBar} className="md:hidden cursor-pointer absolute right-2 top-2">
        <X className="text-app-main " strokeWidth={'3'} width={'30'} height={'30'} />
      </button>

      <CategoryFilter />
      <div className="space-y-5 mt-7 p-4">
        <BrandFilter />
        <ProductTypeFilter />
        <AvailabilityFilter />

        {/* Search */}
        <div className="flex flex-col gap-3">
          {/* Header */}
          <SectionHeader title="Search Objects" />
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

        {/* Filter By Brice */}
        <div className="flex flex-col gap-3 mt-10">
          {/* Header */}
          <SectionHeader title="Filter by price" />
          <div className="text-base flex justify-between items-center text-sidebar-color my-3">
            <span>Your Range :</span>
            <p className="flex items-center gap-1">
              <span>£{priceRange[0]} </span>-<span>£{priceRange[1]}</span>
            </p>
          </div>
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            min={0}
            max={1000}
            step={10}
          />
        </div>
      </div>
    </aside>
  )
}

// Filtration Components
const CategoryFilter = () => {
  const categories = [
    {
      name: 'Fruits',
      icon: Apple,
    },
    {
      name: 'Dairy & Eggs',
      icon: Milk,
    },
    {
      name: 'Bakery',
      icon: Croissant,
    },
    {
      name: 'Seafood',
      icon: Fish,
    },
    {
      name: 'Meats',
      icon: Drumstick,
    },
  ]
  return (
    <div className="w-full">
      {/* Header */}

      <h3 className="text-lg font-medium p-4 text-black">Categories</h3>

      {/* Categories */}
      <div className="flex flex-col">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            className="group p-4 flex items-center hover:bg-white   gap-4 text-left"
          >
            <Icon
              className="size-6 text-sidebar-color transition-colors group-hover:text-primary"
              strokeWidth={1.5}
            />

            <span className="text-base text-sidebar-color transition-colors group-hover:text-primary">
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

const BrandFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-black">Brand</h3>
      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Brand A</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Brand B</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Brand C</span>
        </label>
      </div>
    </div>
  )
}

const ProductTypeFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium text-black mb-1">Product Type</h3>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Fresh</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Organic</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Frozen</span>
        </label>
      </div>
    </div>
  )
}

const AvailabilityFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-black">Availability</h3>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>In stock</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Out of stock</span>
        </label>
      </div>
    </div>
  )
}

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex  items-center gap-5">
      <div className="flex justify-center items-center gap-1">
        <span className="bg-app-main w-5 block h-1 rounded-xl"></span>
        <span className="bg-app-main w-1 block h-1 rounded-sm"></span>
      </div>
      <p className="text-lg font-medium text-sidebar-color">{title}</p>
    </div>
  )
}

export default FilterSidbar
