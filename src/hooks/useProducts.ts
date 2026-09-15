import { getProdcuts } from '@/services/products.service'
import { useQuery } from '@tanstack/react-query'

export const useProducts = (page: number) => {
  return useQuery({
    queryKey: ['products', page],
    queryFn: () => getProdcuts(page),
  })
}
