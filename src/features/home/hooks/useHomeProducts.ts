import { useQuery } from '@tanstack/react-query'
import { getHomeProducts } from '../services/home.service'

export const useHomeProducts = () => {
  return useQuery({
    queryKey: ['home-products'],
    queryFn: getHomeProducts,
  })
}