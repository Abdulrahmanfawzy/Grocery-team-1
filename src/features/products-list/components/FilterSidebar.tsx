import CategoryFilter from './sidebar/CategoryFilter'
import BrandFilter from './sidebar/BrandFilter'

import ProductTypeFilter from './sidebar/ProductTypeFilter'
import AvailabilityFilter from './sidebar/AvailabilityFilter'
import SearchProduct from './sidebar/SearchProduct'
import FilterByBrice from './sidebar/FilterByBrice'

const FilterSidebar = () => {
  return (
    <aside className="md:rounded-md w-full bg-app-light-gray">
      <CategoryFilter />
      <div className="space-y-5 mt-7 p-4">
        <BrandFilter />
        <ProductTypeFilter />
        <AvailabilityFilter />
        {/* Search */}
        <SearchProduct />
        {/* Filter By Brice */}
        <FilterByBrice />
      </div>
    </aside>
  )
}

export default FilterSidebar
