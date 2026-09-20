import { useEffect, useMemo, useState } from 'react'

import type { Category } from '@/types/categories.type'
import type { Product } from '@/types/products.type'

import  ProductCard  from '@/components/common/ProductCard'
import { SectionHeading } from './SectionHeading'

interface ProductSectionProps {
  title: string
  products: Product[]
  categories?: Category[]
  filterByCategory?: boolean
}

export function ProductSection({
  title,
  products,
  categories = [],
  filterByCategory = true,
}: ProductSectionProps) {
  const parentCategories = useMemo(
    () => categories.filter((category) => category.parent_id === null),
    [categories],
  )

  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  useEffect(() => {
    const firstParentCategory = parentCategories[0]

    if (activeCategory === null && firstParentCategory) {
      setActiveCategory(firstParentCategory.id)
    }
  }, [activeCategory, parentCategories])

  const filteredProducts = useMemo(() => {
    if (!filterByCategory || activeCategory === null) {
      return products
    }

    const categoryIds = categories
      .filter(
        (category) =>
          category.id === activeCategory ||
          category.parent_id === activeCategory,
      )
      .map((category) => category.id)

    return products.filter((product) =>
      categoryIds.includes(product.category.id),
    )
  }, [activeCategory, categories, filterByCategory, products])

  const visibleProducts =
    filteredProducts.length > 0 ? filteredProducts : products

  return (
    <section className="box-container py-7 sm:py-9">
      <SectionHeading
        title={title}
        categories={filterByCategory ? parentCategories : []}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {visibleProducts.length === 0 ? (
        <div className="py-10 text-center text-sm text-slate-400">
          No products available.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-2">
          {visibleProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}