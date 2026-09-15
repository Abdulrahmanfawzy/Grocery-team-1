import type { CheckoutStep } from "../types/checkout.types";

interface CheckoutStepsProps {
  currentStep: CheckoutStep;
}

const steps = [
  {
    number: 1,
    label: "Shipping",
  },
  {
    number: 2,
    label: "Payment",
  },
  {
    number: 3,
    label: "Review",
  },
] as const;

export const CheckoutSteps = ({
  currentStep,
}: CheckoutStepsProps) => {
  return (
    <div className="mx-auto mb-10 w-full max-w-6xl">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div
              key={step.number}
              className="flex flex-1 items-center last:flex-none"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex h-10 w-10 items-center justify-center
                    rounded-full border
                    text-sm font-semibold
                    transition-all duration-300
                    ${
                      isActive || isCompleted
                        ? "border-app-main bg-app-main text-white"
                        : "border-border-color bg-white text-app-secondary"
                    }
                  `}
                >
                  {step.number}
                </div>

                <span
                  className={`
                    mt-2 whitespace-nowrap
                    text-xs font-medium md:text-sm
                    ${
                      isActive || isCompleted
                        ? "text-app-main"
                        : "text-app-secondary"
                    }
                  `}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`
                    mx-3 mt-[-22px] h-px flex-1
                    transition-all duration-300
                    md:mx-6
                    ${
                      isCompleted
                        ? "bg-app-main"
                        : "bg-border-color"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

