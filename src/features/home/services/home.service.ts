// import api from '@/lib/axios'
// import type { ProductsResponse } from '@/types/products.type'

// export const getProducts = async (
//   page: number,
// ): Promise<ProductsResponse> => {
//   const response = await api.get<ProductsResponse>(
//     '/products',
//     {
//       params: {
//         page,
//       },
//     },
//   )

//   return response.data
// }

// export interface AddToCartType {
//   product_id: number
//   quantity: number
// }

// export const addToCart = async (
//   data: AddToCartType,
// ) => {
//   const response = await api.post(
//     '/cart/items',
//     data,
//   )

//   return response.data
// }