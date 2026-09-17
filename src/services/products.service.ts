import api from '@/lib/axios'
import type { ProductsResponse } from '@/types/products.type'

export const getProducts = async (page: number): Promise<ProductsResponse> => {
  const axiosRes = await api.get('/products', {
    params: {
      page: page,
    },
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
