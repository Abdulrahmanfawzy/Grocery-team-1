import api from '@/lib/axios'
import type { ProductsResponse } from '@/types/products.type'

export const getProducts = async (page: number): Promise<ProductsResponse> => {
  const axiosRes = await api.get('/products', {
    params: {
      page: page,
    },
  })

  return axiosRes.data.data.data
}
