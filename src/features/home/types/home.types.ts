import type { Pagination, Product } from '@/types/products.type'

export interface HomeProduct extends Product {
  discount_percentage?: number
  total_sold?: number
}

export interface HomeProductsResponse {
  success: boolean
  message: string
  data: HomeProduct[]
  pagination: Pagination
}

export interface HomeProductsParams {
  page?: number
  limit?: number
}