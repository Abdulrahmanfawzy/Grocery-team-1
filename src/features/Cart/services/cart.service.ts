import api from "@/lib/axios";

import type {
  Cart,
  CartResponse,
  AddCartItemRequest,
  UpdateCartItemRequest,
} from "../types/cart.types";

export const getCart = async (): Promise<Cart> => {
  const response = await api.get<CartResponse>("/cart");

  return response.data.data;
};

export const addCartItem = async (
  data: AddCartItemRequest
): Promise<Cart> => {
  const response = await api.post<CartResponse>("/cart/items", data);

  return response.data.data;
};

export const updateCartItem = async (
  id: number,
  data: UpdateCartItemRequest
): Promise<Cart> => {
  const response = await api.put<CartResponse>(
    `/cart/items/${id}`,
    data
  );

  return response.data.data;
};

export const deleteCartItem = async (id: number): Promise<void> => {
  await api.delete(`/cart/items/${id}`);
};

export const clearCart = async (): Promise<void> => {
  await api.delete("/cart");
};