import {
  MessageCircle,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

import RatingStars from "../shared/RatingStars";

const DriverInformation = () => {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Driver Information
      </h2>

      <div className="rounded-xl border border-border-color bg-white p-4 shadow-card-shadow md:p-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Driver Info */}
          <div className="flex items-center gap-4">
            {/* Driver Avatar */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-app-light-gray">
              <span className="text-lg font-semibold text-app-main">
                AB
              </span>
            </div>

            <div>
              <h3 className="font-medium text-foreground">
                Ahmed Badr
              </h3>

              <div className="mt-1 flex items-center gap-2">
                <RatingStars value={5} size={16} />

                <span className="text-xs text-app-muted">
                  Rating (5/5)
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                <span className="text-app-main">
                  Phone Number
                </span>

                <span className="rounded-md border border-border-color px-2 py-1 text-xs text-foreground">
                  +20109 874 2231
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              type="button"
              className="h-10 gap-2 bg-app-main px-4 text-white hover:bg-app-main/90"
            >
              <Phone size={16} />
              Call
            </Button>

            <Button
              type="button"
              className="h-10 gap-2 bg-app-main px-4 text-white hover:bg-app-main/90"
            >
              <MessageCircle size={16} />
              Chat
            </Button>
          </div>
        </div>

        {/* Safety Policy */}
        <div className="relative mt-5 overflow-hidden bg-app-light-gray px-4 py-4">
          <p className="text-xs font-medium text-app-main">
            Our Safety Policy...
          </p>

          <p className="mt-1 pr-5 text-xs leading-5 text-app-muted">
            Drivers must adhere to road safety rules and
            operate vehicles with caution to ensure safe
            and timely deliveries.
          </p>

          {/* Fold */}
          <div
            className="
              absolute bottom-0 right-0
              h-0 w-0
              border-b-[20px]
              border-l-[20px]
              border-b-white
              border-l-transparent
            "
          />
        </div>
      </div>
    </section>
  );
};

export default DriverInformation;