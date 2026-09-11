import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import HeroSectionImg from '@/assets/images/products/product-hero.jpg'

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Image */}
      <div className="relative h-100 overflow-hidden sm:h-112.5 md:h-125 lg:h-144">
        <img
          src={HeroSectionImg}
          alt="Hero section"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Color Layer */}
        <div className="absolute inset-0 bg-linear-to-r from-app-main/95 via-app-main/80 to-app-main/65" />
        {/* Content */}
        <div className="box-container absolute inset-0 flex items-center">
          <div className="flex w-full flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:justify-between">
            {/* Title */}
            <div className="flex flex-col gap-2 sm:gap-4">
              <p className="text-sm font-bold uppercase text-white sm:text-lg md:text-xl lg:text-2xl">
                // Welcome to our company
              </p>

              <h3 className="text-4xl font-bold text-app-light-blue sm:text-5xl md:text-6xl">
                Shop
              </h3>
            </div>

            {/* Breadcrumb */}
            <div>
              <AppBreadcrumb
                breadcrumbItems={[
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
