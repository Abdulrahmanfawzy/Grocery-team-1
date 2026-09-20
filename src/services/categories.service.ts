import api from '@/lib/axios'
import type { CategoriesResponse } from '@/types/categories.type'

export const getCategories = async (): Promise<CategoriesResponse> => {
  const response = await api.get<CategoriesResponse>('/categories')

  return response.data
}