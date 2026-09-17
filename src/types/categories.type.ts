export interface CategoriesResponse {
  success: boolean
  message: string
  data: Category[]
}

export interface Category {
  id: number
  name_en: string
  name_ar: string
  image: string
  parent_id: number | null
}
