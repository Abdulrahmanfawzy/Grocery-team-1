import { useHomeProducts } from '../hooks/useHomeProducts'
import { BestSellersSection } from '../components/BestSellersSection'
import { HeroSection } from '../components/HeroSection'
import { ProductSection } from '../components/ProductSection'
import { PromoBanners } from '../components/PromoBanner'
import { TrustFeatures } from '../components/TrustFeatures'

export default function HomePage() {
  const { data: rawData, isLoading, isError } = useHomeProducts()
  const products = Array.isArray(rawData) ? rawData : []


  return (
    <div className="bg-white">
      <HeroSection />
      <ProductSection title="Hot Deals" products={products} isLoading={isLoading} />
      <ProductSection title="New Products" products={products} isLoading={isLoading} />
      <PromoBanners />
      <BestSellersSection products={products} isLoading={isLoading} />
      <TrustFeatures />
      {isError && (
        <p className="text-center text-sm text-red-500 py-4">
          Failed to load products. Please try again.
        </p>
      )}
    </div>
  )
}
