import HeroSection from '../components/HeroSection'
import ProductsList from '../components/ProductsList'
import FilterSidbar from '../components/FilterSidbar'
import { BadgeCheck, CheckCheck, ChevronRight, Star, StarOff, TruckIcon } from 'lucide-react'
import leftDecoration from '@/assets/winter-discoutn-left.svg'
import rightDecoration from '@/assets/winter-discoutn-right.svg'
import type { ReactNode } from 'react'

const ProductsPage = (): ReactNode => {
  return (
    <div>
      <HeroSection />
      <div className="box-container">
        <div className="gap-4 grid grid-cols-12 my-24">
          {/* Sidbar to filter products */}
          <div className=" hidden md:block  col-span-3">
            <FilterSidbar />
          </div>

          {/* Products List */}
          <div className="col-span-12 md:col-span-9">
            <ProductsList />
          </div>
        </div>

        {/* Winter Discount Card */}
        <div className="relative w-full overflow-hidden rounded-md bg-app-main/90 p-10">
          {/* Left decoration */}
          <img
            src={leftDecoration}
            alt="winter-discoutn-left"
            className="pointer-events-none absolute left-0 top-0 h-full w-auto"
          />

          {/* Right decoration */}
          <img
            src={rightDecoration}
            alt="winter-discoutn-right"
            className="pointer-events-none absolute right-0 top-0 h-full w-auto"
          />

          <div className="relative z-10 flex flex-col items-center gap-4 text-black">
            <h3 className="text-3xl font-regular">
              Winter <span className="text-white">Discounts</span>
            </h3>

            <p className="text-20 font-regular">Get 60% off - Limited Time Offer</p>

            <Countdown />

            <button
              type="button"
              className="flex items-center gap-1 rounded-md bg-app-main/95 p-2 text-base text-white transition hover:bg-app-main"
            >
              <span>Shop now</span>
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="my-24 w-full shadow-card-shadow px-5 py-7">
          <div className="grid grid-cols-1 divide-y-2 divide-gray-200 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x-2">
            {/* Item 1 */}
            <div className="flex items-center gap-3 px-3 py-3 lg:py-0">
              <div className="flex size-11 shrink-0 items-center justify-center">
                <Star fill="#014162" className="size-9 text-app-main" />
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="text-20 font-bold text-gray-900">Curated Products</h4>

                <p className="text-base font-bold leading-5 text-gray-800">
                  Provide free home delivery for all product over $100
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 px-3 py-3 lg:py-0">
              <div className="flex size-11 shrink-0 items-center justify-center">
                <CheckCheck className="size-10 text-app-main" />
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="text-20 font-bold text-gray-900">Handmade</h4>

                <p className="text-base font-bold leading-5 text-gray-800">
                  WE ensure the product quality that is our main goal
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 px-3 py-3 lg:py-0">
              <div className="flex size-11 shrink-0 items-center justify-center">
                <BadgeCheck fill="#014162" className="size-10 text-white  " />
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="text-20 font-bold text-gray-900">Natural Food</h4>

                <p className="text-base font-bold leading-5 text-gray-800">
                  Return product within 3 days for any product you buy
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3 px-3 py-3 lg:py-0">
              <div className="flex size-11 shrink-0 items-center justify-center">
                <TruckIcon className="size-10 text-app-main" />
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="text-20 font-bold text-gray-900">Free home delivery</h4>

                <p className="text-base font-bold leading-5 text-gray-800">
                  We ensure the product that you can trust easily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Countdown = () => {
  const items = [
    { value: '02', label: 'Days' },
    { value: '24', label: 'Hours' },
    { value: '59', label: 'Minutes' },
    { value: '59', label: 'Seconds' },
  ]
  return (
    <div className="flex w-full items-start justify-center gap-1.5 px-2 py-2 sm:gap-3 sm:px-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-start gap-1.5 sm:gap-3">
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {item.value.split('').map((digit, i) => (
                <div
                  key={i}
                  className="flex h-8 w-6 items-center justify-center rounded-md bg-white text-sm font-medium text-black sm:h-10 sm:w-8 sm:rounded-xl sm:text-base md:h-11 md:w-9 md:text-lg"
                >
                  {digit}
                </div>
              ))}
            </div>

            <span className=" mt-1 text-[10px] text-white sm:mt-2 sm:text-sm md:text-base">
              {item.label}
            </span>
          </div>

          {index < items.length - 1 && (
            <span className="mt-1 text-sm leading-7 text-white sm:text-lg sm:leading-9 md:leading-10">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProductsPage
