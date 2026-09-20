import api from "@/lib/axios";

import type {
  CheckoutRequest,
  CheckoutResponse,
} from "@/features/Checkout/types/checkout.types";

export const createCheckout = async (
  checkoutData: CheckoutRequest,
): Promise<CheckoutResponse> => {
  const response = await api.post<CheckoutResponse>(
    "/checkout",
    checkoutData,
  );

  return response.data;
};