interface Product {
  id: number
  name: string
  price: number
  oldPrice: number
  rating: number
  inStock: boolean
  isNew: boolean
  image: string
  images?: string[]
  discount?: number
}

export type { Product }
