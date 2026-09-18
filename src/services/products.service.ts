import api from '@/lib/axios'
import type { ProductsResponse } from '@/types/products.type'

export interface GetProductsParams {
  page?: number | undefined
  per_page?: number | undefined
  min_price?: number | undefined
  max_price?: number | undefined
  availability?: string | undefined
  category_id?: number | undefined
  brand?: string | undefined
  type?: string | undefined
  search: string | undefined
}

export const getProducts = async (params?: GetProductsParams): Promise<ProductsResponse> => {
  const axiosRes = await api.get('/products', {
    params,
  })

  return axiosRes.data
}

export interface AddToCartType {
  product_id: number
  quantity: number
}

export const addToCart = async (data: AddToCartType) => {
  const axiosRes = await api.post('/cart/items', data)
  return axiosRes.data
}
