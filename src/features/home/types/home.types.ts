export interface HomeProduct {
  id: string
  name: string
  category: string
  quantity: string
  price: number
  oldPrice?: number
  image: string
  badge?: string
}

export interface ProductSectionProps {
  title: string
  products: HomeProduct[]
  categories: string[]
}