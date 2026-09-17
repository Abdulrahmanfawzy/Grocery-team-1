import { getProducts, type GetProductsParams } from '@/services/products.service'
import { useQuery } from '@tanstack/react-query'

export const useProducts = (params?: GetProductsParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
  })
}
