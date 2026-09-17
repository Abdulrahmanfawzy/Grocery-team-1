import { useState } from 'react'
import type { ProductListItem } from '@/types/products/products.type'
import { ProductCard } from './ProductCard'
import { SectionHeading } from './SectionHeading'

interface ProductSectionProps {
  title: string
  products: ProductListItem[]
  isLoading?: boolean
}

export function ProductSection({ title, products, isLoading = false }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('')

  const visibleProducts = products.slice(0, 5)

  return (
    <section className="box-container py-7 sm:py-9">
      <SectionHeading
        title={title}
        categories={[]}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {isLoading ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded border border-slate-100 bg-slate-100" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-2">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
