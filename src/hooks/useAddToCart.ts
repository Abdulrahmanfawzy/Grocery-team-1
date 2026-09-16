import { addToCart, type AddToCartType } from '@/services/products.service'
import { useMutation } from '@tanstack/react-query'

export const useAddToCart = () => {
  return useMutation({
    mutationKey: ['addItemToCart'],
    mutationFn: (data: AddToCartType) => addToCart(data),
  })
}
