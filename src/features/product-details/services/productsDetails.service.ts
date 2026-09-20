import api from '@/lib/axios'
import type { ProductsResponse } from '@/types/products.type'

export const getProductDetails = async (
  productId: number,
): Promise<ProductsResponse['data'][0]> => {
  const axiosRes = await api.get(`/products/${productId}`)

  return axiosRes.data.data
}
