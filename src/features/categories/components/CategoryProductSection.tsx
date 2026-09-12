import ProductCard from '@/components/common/ProductCard'
import ProductCarousel from '@/components/common/ProductCarousel'
import type { Product } from '@/types/products/products.type'

interface CategoryProductSectionProps {
  title: string
  products: Product[]
}

export function CategoryProductSection({
  title,
  products,
}: CategoryProductSectionProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className="box-container py-6 sm:py-8">
      <h2 className="mb-4 text-base font-semibold text-sidebar-color sm:text-lg">
        {title}
      </h2>

      <ProductCarousel
        products={products}
        element={(product) => (
          <ProductCard product={product} />
        )}
      />
    </section>
  )
}