import { productsBoughtTogether } from '@/services/products.service'
import { useQuery } from '@tanstack/react-query'

export const useProductsBoughtTogether = (productId: number) => {
  return useQuery({
    queryKey: ['products-bought-together', productId],
    queryFn: () => productsBoughtTogether(productId),
  })
}
