import { useState } from "react";
import { CheckoutBreadcrumb } from "../components/CheckoutBreadcrumbs";
import { CheckoutSteps } from "../components/CheckoutSteps";
import { DeliverySteps } from "../components/delivery/DeliverySteps";
import { PaymentSteps } from "../components/payment/PaymentSteps";
import { ConfirmationSteps } from "../components/confirmation/ConfirmationSteps";

import { useCheckout } from "../hooks/useCheckout";

import type { CheckoutData } from "../types/checkout.types";

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

  const handleConfirmOrder = () => {
    console.log("Order confirmed:", checkoutData);

    // Later:
    // connect API / create order
  };

  return (
    <main className="min-h-screen bg-background py-8 md:py-10">
      <div className="box-container">
        {/* Header */}
        <div className="mb-8 ">
           <CheckoutBreadcrumb currentStep={currentStep} />
        </div>

        {/* Progress */}
       
        <CheckoutSteps currentStep={currentStep} />

        {/* Current Step */}
        <div className="mx-auto max-w-4xl">
          {currentStep === 1 && (
            <DeliverySteps
              data={checkoutData}
              onChange={setCheckoutData}
              onContinue={goToNextStep}
            />
          )}

          {currentStep === 2 && (
            <PaymentSteps
              data={checkoutData}
              onChange={setCheckoutData}
              onContinue={goToNextStep}
              onBack={goToPreviousStep}
            />
          )}

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

