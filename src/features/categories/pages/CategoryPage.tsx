import { CategoryFilter } from '../components/CategoryFilter'
import { CategoryList } from '../components/CategoryList'
import { CategoryProductSection } from '../components/CategoryProductSection'
import { CategoryPromoBanner } from '../components/CategoryPromoBanner'
import { meats, poultry, seafood } from '../data/categories.data'

export default function CategoryPage() {
  return (
    <div className="bg-white">
      <CategoryFilter />
      <CategoryList />

      <CategoryProductSection title="Meats" products={meats} />
      <CategoryProductSection title="Poultry" products={poultry} />
      <CategoryProductSection title="Seafood" products={seafood} />

      <CategoryPromoBanner />
    </div>
  )
}