import { useState } from "react";
import type { CheckoutStep } from "../types/checkout.types";

export const useCheckout = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(1);

  const goToNextStep = () => {
    setCurrentStep((prev) => {
      if (prev === 3) return 3;
      return (prev + 1) as CheckoutStep;
    });
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => {
      if (prev === 1) return 1;
      return (prev - 1) as CheckoutStep;
    });
  };

  const goToStep = (step: CheckoutStep) => {
    setCurrentStep(step);
  };

  return {
    currentStep,
    goToNextStep,
    goToPreviousStep,
    goToStep,
  };
};