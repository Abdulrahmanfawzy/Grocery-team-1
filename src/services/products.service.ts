import { axiosInstance } from '@/lib/axios'
import type { ProductsResponse } from '@/types/products.type'

export const getProdcuts = async (page: number): Promise<ProductsResponse> => {
  const axiosRes = await axiosInstance.get('/products', {
    params: {
      page: page,
    },
  })

  return axiosRes.data.data.data
}
