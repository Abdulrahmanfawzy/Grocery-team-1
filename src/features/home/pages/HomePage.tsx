import ProductSkeleton from '@/components/common/ProductSkeleton'
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'

import { useHotDeals, useNewProducts } from '../hooks/useHomeProducts'
import { BestSellersSection } from '../components/BestSellersSection'
import { HeroSection } from '../components/HeroSection'
import  ProductCard  from '@/components/common/ProductCard'
import { ProductSection } from '../components/ProductSection'
import { PromoBanners } from '../components/PromoBanner'
import { TrustFeatures } from '../components/TrustFeatures'

export default function HomePage() {
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts({
    page: 1,
  })

  const {
    data: hotDealsData,
    isLoading: hotDealsLoading,
    isError: hotDealsError,
  } = useHotDeals(1)

  const {
    data: newProductsData,
    isLoading: newProductsLoading,
    isError: newProductsError,
  } = useNewProducts(1)

  const { data: categoriesData } = useCategories()

  if (productsLoading) {
    return <ProductSkeleton />
  }

  if (productsError) {
    return (
      <div className="box-container py-16 text-center text-sm text-red-500">
        Failed to load products.
      </div>
    )
  }

  const products = productsData?.data ?? []
  const hotDeals = hotDealsData?.data ?? []
  const newProducts = newProductsData?.data ?? []

  return (
    <div className="bg-white">
      <HeroSection />

      <ProductSection
        title="Products"
        products={products}
        categories={categoriesData?.data ?? []}
      />

      <section className="box-container py-7 sm:py-9">
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-700 sm:text-[28px]">
            Hot Deals
          </h2>
        </div>

        {hotDealsLoading && (
          <div className="py-8 text-center text-sm text-slate-400">
            Loading hot deals...
          </div>
        )}

        {hotDealsError && (
          <div className="py-8 text-center text-sm text-red-500">
            Failed to load hot deals.
          </div>
        )}

        {!hotDealsLoading && !hotDealsError && hotDeals.length > 0 && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-2">
            {hotDeals.slice(0, 5).map((product) => (
              <div key={product.id} className="relative">
                {product.discount_percentage !== undefined && (
                  <span className="absolute left-0 top-0 z-10 bg-app-main px-2 py-1 text-[9px] font-medium text-white">
                    {product.discount_percentage}% OFF
                  </span>
                )}

                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {!hotDealsLoading && !hotDealsError && hotDeals.length === 0 && (
          <div className="py-8 text-center text-sm text-slate-400">
            No hot deals available.
          </div>
        )}
      </section>

      {newProductsLoading && (
        <ProductSkeleton />
      )}

      {newProductsError && (
        <div className="box-container py-8 text-center text-sm text-red-500">
          Failed to load new products.
        </div>
      )}

      {!newProductsLoading && !newProductsError && (
        <ProductSection
          title="New Products"
          products={newProducts}
          categories={categoriesData?.data ?? []}
          filterByCategory={false}
        />
      )}

      <PromoBanners />

      <BestSellersSection />

      <TrustFeatures />
    </div>
  )
}