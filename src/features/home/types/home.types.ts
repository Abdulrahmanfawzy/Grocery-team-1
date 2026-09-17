import type { ProductListItem } from '@/types/products/products.type'
import type { Category } from '@/types/categories/category.type'

export interface ProductHome extends ProductListItem {
  average_rating?: number,
}
export interface HomeCategory extends Category {
}
export interface ProductSectionProps {
  title: string
  products: ProductListItem[]
  categories: HomeCategory[]
}