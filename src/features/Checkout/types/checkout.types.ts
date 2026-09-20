export type CheckoutStep = 1 | 2 | 3;

export type FulfilmentMethod = "delivery" | "pickup";

export type ScheduleDelivery = "now" | "later";

export type DeliverySpeed = "standard" | "priority";

export interface ContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface DeliveryInfo {
  fulfilmentMethod: FulfilmentMethod;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  scheduleDelivery: ScheduleDelivery;
  deliverySpeed: DeliverySpeed;
}

export interface PaymentInfo {
  paymentMethod:
    | "card"
    | "cash"
    | "apple-pay"
    | "google-pay"
    | "wallet";
}

export interface CheckoutData {
  contact: ContactInfo;
  delivery: DeliveryInfo;
  payment: PaymentInfo;
}

/* =========================
   Address
========================= */

export interface Address {
  id: number;
  label: string;
  address: string;
  city: string;
  provenance: string;
  postal_code: string;
  is_default: boolean;
  time_slots_id?: number;
}

/* =========================
   Checkout API
========================= */

export interface CheckoutRequest {
  address_id: number;
  fulfillment_type: "delivery" | "pickup";
  schedule_delivery: "deliver_now" | "schedule_later";
  delivery_speed: "standard" | "priority";
}

export interface CheckoutResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}