import { getProducts } from '@/services/products.service'
import { useQuery } from '@tanstack/react-query'

export const useProducts = (page: number = 1) => {
  return useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
  })
}
