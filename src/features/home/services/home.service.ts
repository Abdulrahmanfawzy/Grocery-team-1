import api from '@/lib/axios'
import type { ProductListItem, ProductListResponse } from '@/types/products/products.type'

export const getHomeProducts = async (): Promise<ProductListItem[]> => {
  const response = await api.get<ProductListResponse>('/products')

  const products = response.data.data.data.data

  return Array.isArray(products) ? products : []
}
