import { useState } from 'react'
import { useCart } from '@/features/Cart/hooks/useCart'
import type { AddCartItemRequest } from '@/features/Cart/types/cart.types'
import { toast } from 'sonner'

export const useAddToCart = () => {
  const [addingProductId, setAddingProductId] = useState<number | null>(null)
  const { addItem } = useCart()

  const handleAddToCart = (data: AddCartItemRequest) => {
    setAddingProductId(data.product_id)

    addItem(data, {
      onSuccess: () => {
        toast.success('Item Add To cart successfully')
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || 'Failed to add item to cart')
      },
      onSettled: () => {
        setAddingProductId(null)
      },
    })
  }

  return {
    handleAddToCart,
    addingProductId,
  }
}
