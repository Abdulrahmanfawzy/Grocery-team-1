export interface ProductsResponse {
  success: boolean
  message: string
  data: Product[]
  pagination: Pagination
}

export interface Product {
  id: number
  category_id: number
  name: string
  description: string
  how_to_use: string | null
  image: string
  quantity: number
  price: string
  discount_price: string | null
  average_rating: number
  ratings?: Rating[]
}

export interface Rating {
  id: number
  comment: string
  stars: number
  created_at: string | null
  user: RatingUser
}

export interface RatingUser {
  name: string
  avatar: string | null
}

export interface Pagination {
  current_page: number
  last_page: number
  per_page: number
  total: number
  from: number
  to: number
  links: PaginationLinks
}

export interface PaginationLinks {
  first: string
  last: string
  prev: string | null
  next: string | null
}