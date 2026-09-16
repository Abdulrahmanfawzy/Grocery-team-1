export interface ProductsResponse {
  data: Product[]
  current_page: number
  last_page: number
  first_page_url: string
  from: number
  last_page_url: string
  links: PaginationLink[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

interface Product {
  id: number
  category_id: number
  name: string
  descreption: string
  description: string
  how_to_use: string | null
  image: string
  ratings: rating[]
  average_rating: number
  quantity: number
  price: string
  discount_price: string | null
  created_at: string | null
  updated_at: string | null
}
interface PaginationLink {
  url: string | null
  label: string
  page: number | null
  active: boolean
}

interface rating {
  comment: string
  created_at: null | string
  id: number
  stars: number
  user: { name: string; avatar: null | string }
}
