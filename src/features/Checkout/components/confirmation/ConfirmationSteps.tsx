import type { CheckoutData } from "../../types/checkout.types";
import DriverInformation from "../confirmation/DriverInformation";
import OrderOptions from "../confirmation/OrderOptions";
import OrderTracking from "../confirmation/OrderTracking";
import OrderSummary from "../shared/OrderSummary";

interface ConfirmationStepsProps {
  data: CheckoutData;
  onBack: () => void;
  onConfirm: () => void;
}

export const ConfirmationSteps = ({
  data,
  onBack,
  onConfirm,
}: ConfirmationStepsProps) => {
  return (
    <section className="space-y-8">
      <OrderTracking />

      <DriverInformation />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <OrderSummary />

        <OrderOptions data={data} />
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="h-11 rounded-lg border border-border-color px-6 text-sm font-medium text-foreground transition hover:border-app-main hover:text-app-main"
        >
          Back
        </button>

        <button
          type="button"
          onClick={onConfirm}
          className="h-11 rounded-lg bg-app-main px-8 text-sm font-medium text-white transition hover:bg-app-main/90"
        >
          Confirm Order
        </button>
      </div>
    </section>
  );
};

export default ConfirmationSteps;