import { useQuery } from '@tanstack/react-query'

import {
  getBestSellers,
  getHotDeals,
  getNewProducts,
} from '../services/home.service'

export const useHotDeals = (page = 1) => {
  return useQuery({
    queryKey: ['home', 'hot-deals', page],
    queryFn: () => getHotDeals({ page }),
  })
}

export const useNewProducts = (page = 1) => {
  return useQuery({
    queryKey: ['home', 'new-products', page],
    queryFn: () => getNewProducts({ page }),
  })
}

export const useBestSellers = (page = 1) => {
  return useQuery({
    queryKey: ['home', 'best-sellers', page],
    queryFn: () => getBestSellers({ page }),
  })
}