import type { Product } from '@/types/products/products.type'

export interface HomeProduct extends Product {}

export interface ProductSectionProps {
  title: string
  products: HomeProduct[]
  categories: string[]
}