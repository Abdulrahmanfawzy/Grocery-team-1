import ProductSkeleton from '@/components/common/ProductSkeleton'
import { BestSellersSection } from '../components/BestSellersSection'
import { HeroSection } from '../components/HeroSection'
import { ProductSection } from '../components/ProductSection'
import { PromoBanners } from '../components/PromoBanner'
import { TrustFeatures } from '../components/TrustFeatures'
import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'

export default function HomePage() {
  const { data, isLoading, isError } = useProducts(1)
  const { data: categoriesData } = useCategories()

  if (isLoading) {
    return < ProductSkeleton/>
  }

  if (isError) {
    return <div>Failed to load products.</div>
  }

  const products = data?.data ?? []

  return (
    <div className="bg-white">
      <HeroSection />

      <ProductSection title="Products" products={products} categories={categoriesData?.data ?? []} />

      <PromoBanners />

      <BestSellersSection />

      <TrustFeatures />
    </div>
  )
}
