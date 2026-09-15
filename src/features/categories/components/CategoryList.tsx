import { CategoryCard } from './CategoryCard'
import { categories } from '../data/categories.data'

export function CategoryList() {
  return (
    <section className="box-container pt-4">
      <div className="flex gap-3 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  )
}