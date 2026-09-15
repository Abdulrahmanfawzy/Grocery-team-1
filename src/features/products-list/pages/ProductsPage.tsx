import HeroSection from '../components/HeroSection'
import ProductsList from '../components/ProductsList'
import type { ReactNode } from 'react'
import SidebarInMobile from '../components/SidebarInMobile'
import FilterSidebar from '../components/FilterSidebar'
import WinterDiscountCard from '../components/WinterDiscountCard'
import FeatureCards from '../components/FeatureCards'

const ProductsPage = (): ReactNode => {
  return (
    <div>
      <HeroSection />
      <div className="box-container">
        <div className="gap-4 grid grid-cols-12 my-24">
          {/* Sidebar in Mobile */}
          <div className="block md:hidden col-span-12">
            <SidebarInMobile />
          </div>

          {/* Sidebar to filter products in PC */}
          <div className="hidden md:block col-span-3">
            <FilterSidebar />
          </div>

          {/* Products List */}
          <div className="col-span-12 md:col-span-9">
            <ProductsList />
          </div>
        </div>

        {/* WinterDiscountCard */}
        <WinterDiscountCard />

        {/* Cards */}
        <div className="my-24 w-full shadow-card-shadow px-5 py-7">
          <div className="grid grid-cols-1 divide-y-2 divide-gray-200 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x-2">
            <FeatureCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
