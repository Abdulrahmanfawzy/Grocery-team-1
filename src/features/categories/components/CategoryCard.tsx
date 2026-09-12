import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/common'
import type { CategoryItem } from '../data/categories.data'

interface CategoryCardProps {
  category: CategoryItem
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="block shrink-0"
    >
      <Card className="h-[74px] w-[125px] border-border-color bg-white shadow-sm transition
       hover:-translate-y-0.5 hover:shadow-md sm:h-[80px] sm:w-[135px]">
        <CardContent className="flex h-full flex-col items-center justify-center gap-1 p-2">
          <img
            src={category.image}
            alt={category.name}
            className="h-9 w-12 object-contain"
          />

          <span className="text-center text-[10px] font-medium text-sidebar-color sm:text-xs">
            {category.name}
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}