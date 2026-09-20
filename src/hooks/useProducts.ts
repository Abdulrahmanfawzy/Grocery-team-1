import { useQuery } from '@tanstack/react-query'

import {
  getProducts,
  type GetProductsParams,
} from '@/services/products.service'

export const useProducts = (params?: GetProductsParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
  })
}