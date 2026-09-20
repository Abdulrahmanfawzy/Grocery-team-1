import ProductSkeleton from '@/components/common/ProductSkeleton'
import { BestSellersSection } from '../components/BestSellersSection'
import { HeroSection } from '../components/HeroSection'
import { ProductSection } from '../components/ProductSection'
import { PromoBanners } from '../components/PromoBanner'
import { TrustFeatures } from '../components/TrustFeatures'
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'

export default function HomePage() {
  const { data, isLoading, isError } = useProducts({ page: 1, search: undefined })
  const { data: categoriesData } = useCategories()

  if (isLoading) {
    return <ProductSkeleton />
  }

  const products = data?.data ?? []

  return (
    <div className="bg-white">
      <HeroSection />
      <ProductSection
        title="Products"
        products={products}
        categories={categoriesData?.data ?? []}
      />

      <PromoBanners />

      <BestSellersSection products={products} />
      <TrustFeatures />
      {isError && (
        <p className="text-center text-sm text-red-500 py-4">
          Failed to load products. Please try again.
        </p>
      )}
    </div>
  )
}
