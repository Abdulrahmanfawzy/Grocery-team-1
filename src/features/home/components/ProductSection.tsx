import { useMemo, useState } from 'react'
import { categories, type HomeProduct } from '../data/home.data'
import { ProductCard } from './ProductCard'
import { SectionHeading } from './SectionHeading'

interface ProductSectionProps {
  title: string
  products: HomeProduct[]
  filterByCategory?: boolean
}

export function ProductSection({ title, products, filterByCategory = true }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState(products[0]?.category ?? categories[0])
  const filteredProducts = useMemo(
    () => (filterByCategory ? products.filter((product) => product.category === activeCategory) : products),
    [activeCategory, filterByCategory, products],
  )

  const visibleProducts = filteredProducts.length > 0 ? filteredProducts : products

  return (
    <section className="box-container py-7 sm:py-9">
      <SectionHeading
        title={title}
        categories={filterByCategory ? categories : []}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-2">
        {visibleProducts.slice(0, 5).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  )
}
