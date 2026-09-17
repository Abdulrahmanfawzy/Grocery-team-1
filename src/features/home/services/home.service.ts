import api from '@/lib/axios'
import type { ProductListItem, ProductListResponse } from '@/types/products/products.type'

export const getHomeProducts = async (): Promise<ProductListItem[]> => {
  // 🟠 Bug: Home page uses product list, not get one product
  // Your example response is from get one product, but this request calls /products.
  // If /products does not return average_rating, the card will not have rating data.
  // Fix: Check /products response and make sure each product has average_rating.
  // ✅ Example Fix Syntax (DO NOT APPLY, just example):
  // GET /products should return each product with average_rating: 5
  const response = await api.get<ProductListResponse>('/products')

  const products = response.data.data.data.data

  return Array.isArray(products) ? products : []
}
