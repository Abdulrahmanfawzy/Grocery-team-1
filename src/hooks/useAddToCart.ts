import { useCart } from '@/features/Cart/hooks/useCart'
import type { AddCartItemRequest } from '@/features/Cart/types/cart.types'
import { toast } from 'react-toastify'

export const useAddToCart = () => {
  const { addItem, isAddingItem } = useCart()

  const handleAddToCart = (data: AddCartItemRequest) => {
    addItem(data, {
      onSuccess: () => {
        toast.success('Item Add To cart successfully')
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || 'Failed to add item to cart')
      },
    })
  }

  return {
    handleAddToCart,
    isAddingItem,
  }
}
