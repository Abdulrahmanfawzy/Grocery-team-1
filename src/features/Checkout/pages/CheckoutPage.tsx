import { useState } from "react";

import { CheckoutBreadcrumb } from "../components/CheckoutBreadcrumbs";
import { CheckoutSteps } from "../components/CheckoutSteps";
import { DeliverySteps } from "../components/delivery/DeliverySteps";
import { PaymentSteps } from "../components/payment/PaymentSteps";
import { ConfirmationSteps } from "../components/confirmation/ConfirmationSteps";

import { useCheckout } from "../hooks/useCheckout";
import { useAddresses } from "../hooks/useAddresses";

import { createCheckout } from "@/hooks/checkoutApi";

import type {
  CheckoutData,
  CheckoutRequest,
} from "../types/checkout.types";

const initialData: CheckoutData = {
  contact: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  },

  delivery: {
    fulfilmentMethod: "delivery",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    scheduleDelivery: "now",
    deliverySpeed: "standard",
  },

  payment: {
    paymentMethod: "card",
  },
};

const CheckoutPage = () => {
  const {
    currentStep,
    goToNextStep,
    goToPreviousStep,
  } = useCheckout();

  const [checkoutData, setCheckoutData] =
    useState<CheckoutData>(initialData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const {
    defaultAddressId,
    isLoading: isLoadingAddresses,
    isError: isAddressError,
  } = useAddresses(currentStep === 3);

  const handleConfirmOrder = async () => {
    try {
      setIsSubmitting(true);
      setCheckoutError("");

      /* =========================
         Check Address
      ========================= */

      if (!defaultAddressId) {
        throw new Error(
          "No default address found. Please add an address first.",
        );
      }

      /* =========================
         Prepare Checkout Request
      ========================= */

      const checkoutRequest: CheckoutRequest = {
  address_id: defaultAddressId,
  fulfillment_type:
    checkoutData.delivery.fulfilmentMethod,
  schedule_delivery:
    checkoutData.delivery.scheduleDelivery === "now"
      ? "deliver_now"
      : "schedule_later",
  delivery_speed:
    checkoutData.delivery.deliverySpeed,
};

      console.log(
        "Sending checkout:",
        checkoutRequest,
      );

      /* =========================
         Create Checkout
      ========================= */

      const result = await createCheckout(
        checkoutRequest,
      );

      console.log(
        "Checkout response:",
        result,
      );

      if (!result.success) {
        throw new Error(
          result.message || "Checkout failed",
        );
      }

      console.log(
        "Order created successfully",
      );
    } catch (error) {
      console.error(
        "Checkout error:",
        error,
      );

      setCheckoutError(
        error instanceof Error
          ? error.message
          : "Something went wrong",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================
     Address Loading
  ========================= */

  if (
    currentStep === 3 &&
    isLoadingAddresses
  ) {
    return (
      <main className="min-h-screen bg-background py-8 md:py-10">
        <div className="box-container">
          <div className="flex-center min-h-60">
            <p className="text-app-muted">
              Loading address...
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-8 md:py-10">
      <div className="box-container">

        {/* =========================
            Breadcrumb
        ========================= */}

        <div className="mb-8">
          <CheckoutBreadcrumb
            currentStep={currentStep}
          />
        </div>

        {/* =========================
            Checkout Steps
        ========================= */}

        <CheckoutSteps
          currentStep={currentStep}
        />

        {/* =========================
            Address Error
        ========================= */}

        {isAddressError && currentStep === 3 && (
          <div className="mx-auto mb-6 max-w-4xl rounded-lg border border-error/20 bg-red-50 p-4 text-sm text-error">
            Failed to load your address.
          </div>
        )}

        {/* =========================
            Checkout Error
        ========================= */}

        {checkoutError && (
          <div className="mx-auto mb-6 max-w-4xl rounded-lg border border-error/20 bg-red-50 p-4 text-sm text-error">
            {checkoutError}
          </div>
        )}

        {/* =========================
            Checkout Content
        ========================= */}

        <div className="mx-auto max-w-4xl">

          {/* Delivery */}

          {currentStep === 1 && (
            <DeliverySteps
              data={checkoutData}
              onChange={setCheckoutData}
              onContinue={goToNextStep}
            />
          )}

          {/* Payment */}

          {currentStep === 2 && (
            <PaymentSteps
              data={checkoutData}
              onChange={setCheckoutData}
              onContinue={goToNextStep}
              onBack={goToPreviousStep}
            />
          )}

          {/* Confirmation */}

          {currentStep === 3 && (
            <ConfirmationSteps
              data={checkoutData}
              onBack={goToPreviousStep}
              onConfirm={handleConfirmOrder}
            />
          )}

        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;