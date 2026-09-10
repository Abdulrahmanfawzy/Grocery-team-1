import { BestSellersSection } from '../components/BestSellersSection'
import { HeroSection } from '../components/HeroSection'
import { ProductSection } from '../components/ProductSection'
import { PromoBanners } from '../components/PromoBanner'
import { TrustFeatures } from '../components/TrustFeatures'
import { hotDeals, newProducts } from '../data/home.data'

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProductSection title="Hot Deals" products={hotDeals} />
      <ProductSection title="New Product" products={newProducts} />
      <PromoBanners />
      <BestSellersSection />
      <TrustFeatures />
    </div>
  )
}
