
export interface Product {
  id: number
  category_id: number
  name: string
  descreption: string
  how_to_use: string | null
  image: string
  quantity: number
  price: string
  discount_price: string | null
  created_at: string | null
  updated_at: string | null
}

