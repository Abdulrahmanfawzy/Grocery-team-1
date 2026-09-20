import api from '@/lib/axios'

import type {
  HomeProductsParams,
  HomeProductsResponse,
} from '../types/home.types'

export const getHotDeals = async (
  params: HomeProductsParams = {},
): Promise<HomeProductsResponse> => {
  const response = await api.get<HomeProductsResponse>(
    '/products/hot-deals',
    {
      params: {
        limit: 10,
        ...params,
      },
    },
  )

  return response.data
}

export const getNewProducts = async (
  params: HomeProductsParams = {},
): Promise<HomeProductsResponse> => {
  const response = await api.get<HomeProductsResponse>(
    '/products/new',
    {
      params: {
        limit: 10,
        ...params,
      },
    },
  )

  return response.data
}

export const getBestSellers = async (
  params: HomeProductsParams = {},
): Promise<HomeProductsResponse> => {
  const response = await api.get<HomeProductsResponse>(
    '/products/best-sellers',
    {
      params: {
        limit: 10,
        ...params,
      },
    },
  )

  return response.data
}