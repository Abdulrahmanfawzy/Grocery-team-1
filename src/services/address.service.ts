import api from "@/lib/axios";

import type {
  Address,
} from "../features/Checkout/types/checkout.types";

export const getAddresses = async (): Promise<Address[]> => {
  const response = await api.get("/user/addresses");

  return response.data?.data ?? [];
};

export const getAddressById = async (
  id: number,
): Promise<Address> => {
  const response = await api.get(`/user/addresses/${id}`);

  return response.data?.data ?? response.data;
};