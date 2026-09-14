import { useState } from "react";

import {
  Download,
  RefreshCcw,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import type { CheckoutData } from "../../types/checkout.types";

import RatingStars from "../shared/RatingStars";

interface OrderOptionsProps {
  data: CheckoutData;
}

const OrderOptions = ({
  data,
}: OrderOptionsProps) => {
  const [rating, setRating] = useState(0);

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Order Options
      </h2>

      <div className="rounded-xl border border-border-color bg-white p-4 shadow-card-shadow md:p-5">
        {/* Delivery Address */}
        <div>
          <p className="mb-2 text-sm font-medium">
            Delivery Address
          </p>

          <div className="rounded-md border border-border-color px-3 py-2 text-xs leading-5 text-app-muted">
            {data.delivery.address || "-"}
          </div>
        </div>

        {/* Current Order */}
        <div className="mt-6">
          <p className="mb-3 text-sm font-medium">
            Current Order
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-9 gap-2 border-border-color text-xs"
            >
              <Download size={14} />

              Download Receipt
            </Button>

            <Button
              type="button"
              variant="outline"
              className="h-9 gap-2 border-border-color text-xs"
            >
              <RefreshCcw size={14} />

              Reorder
            </Button>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-6">
          <p className="mb-2 text-sm font-medium">
            How Was Your Experience
          </p>

          <RatingStars
            value={rating}
            interactive
            onChange={setRating}
            size={19}
          />

          <p className="mt-1 text-xs text-app-muted">
            Rating ({rating}/5)
          </p>

          <Input
            className="mt-2 h-10 border-border-color"
          />
        </div>

        {/* Special Offer */}
        <div className="mt-7 max-w-[220px] rounded-lg border border-border-color p-3">
          <p className="mb-3 text-sm font-medium">
            Special Offer Code
          </p>

          <label className="mb-1 block text-xs text-app-main">
            Offer Code
          </label>

          <Input
            defaultValue="Azu280"
            className="h-9 border-border-color text-sm"
          />

          <Button
            type="button"
            className="mt-3 h-9 w-full bg-app-main text-xs text-white hover:bg-app-main/90"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderOptions;