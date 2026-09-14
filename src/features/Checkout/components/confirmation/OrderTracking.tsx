import {
  Check,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

interface TrackingStepProps {
  label: string;
  icon: React.ReactNode;
  completed?: boolean;
  active?: boolean;
}

const TrackingStep = ({
  label,
  icon,
  completed = false,
  active = false,
}: TrackingStepProps) => {
  const isPassed = completed || active;

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div
        className={`
          flex h-8 w-8 items-center justify-center rounded-full
          border-2
          ${
            isPassed
              ? "border-app-main bg-app-main text-white"
              : "border-border-color bg-app-light-gray text-app-muted"
          }
        `}
      >
        {icon}
      </div>

      <span
        className={`
          mt-2 max-w-[90px] text-[10px] leading-4
          md:text-xs
          ${
            isPassed
              ? "text-app-main"
              : "text-app-muted"
          }
        `}
      >
        {label}
      </span>
    </div>
  );
};

const OrderTracking = () => {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Track Your Order
      </h2>

      <div className="rounded-xl border border-border-color bg-white p-5 shadow-card-shadow md:p-6">
        {/* Status */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-app-muted">
              Current Status
            </p>

            <p className="text-sm font-medium text-app-main">
              Out for Delivery
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-app-muted">
              Estimated Delivery
            </p>

            <p className="text-sm font-medium text-app-main">
              Today, Nov 4
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8 px-1 md:px-8">
          <div className="relative">
            {/* Background line */}
            <div className="absolute left-[10%] right-[10%] top-4 h-[2px] bg-border-color" />

            {/* Progress line */}
            <div className="absolute left-[10%] top-4 h-[2px] w-[68%] bg-app-main" />

            <div className="relative grid grid-cols-5">
              <TrackingStep
                label="Order Placed"
                icon={<Check size={15} />}
                completed
              />

              <TrackingStep
                label="Processing"
                icon={<Package size={15} />}
                completed
              />

              <TrackingStep
                label="Shipped"
                icon={<Truck size={15} />}
                completed
              />

              <TrackingStep
                label="Out for Delivery"
                icon={<MapPin size={15} />}
                active
              />

              <TrackingStep
                label="Delivered"
                icon={<Check size={15} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;