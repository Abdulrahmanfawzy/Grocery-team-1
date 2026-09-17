import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getCart,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  clearCart,
} from "../services/cart.service";

import type {
  AddCartItemRequest,
  UpdateCartItemRequest,
} from "../types/cart.types";

export const useCart = () => {
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const addItemMutation = useMutation({
    mutationFn: (data: AddCartItemRequest) =>
      addCartItem(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  const updateItemMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: UpdateCartItemRequest;
    }) => updateCartItem(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: (id: number) =>
      deleteCartItem(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  const clearCartMutation = useMutation({
    mutationFn: clearCart,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return {
    ...cartQuery,

    addItem: addItemMutation.mutate,
    addItemAsync: addItemMutation.mutateAsync,
    isAddingItem: addItemMutation.isPending,

    updateItem: updateItemMutation.mutate,
    updateItemAsync: updateItemMutation.mutateAsync,
    isUpdatingItem: updateItemMutation.isPending,

    deleteItem: deleteItemMutation.mutate,
    deleteItemAsync: deleteItemMutation.mutateAsync,
    isDeletingItem: deleteItemMutation.isPending,

    clearCart: clearCartMutation.mutate,
    clearCartAsync: clearCartMutation.mutateAsync,
    isClearingCart: clearCartMutation.isPending,
  };
};