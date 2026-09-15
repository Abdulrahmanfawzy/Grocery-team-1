import { useState } from "react";
import {
  Car,
  Clock,
  Timer,
  Truck,
  Zap,
} from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import type {
  CheckoutData,
  DeliveryInfo,
} from "../../types/checkout.types";

import OrderSummary from "@/features/Checkout/components/shared/OrderSummary";

interface DeliveryStepsProps {
  data: CheckoutData;
  onChange: (data: CheckoutData) => void;
  onContinue: () => void;
}

export const DeliverySteps = ({
  data,
  onChange,
  onContinue,
}: DeliveryStepsProps) => {
  const [specialNote, setSpecialNote] = useState("");

  const updateContact = (
    field: keyof CheckoutData["contact"],
    value: string,
  ) => {
    onChange({
      ...data,
      contact: {
        ...data.contact,
        [field]: value,
      },
    });
  };

  const updateDelivery = (
    field: keyof DeliveryInfo,
    value: string,
  ) => {
    onChange({
      ...data,
      delivery: {
        ...data.delivery,
        [field]: value,
      } as DeliveryInfo,
    });
  };

  return (
    <div className="space-y-8">
      {/* Main Checkout Layout */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-8">
          {/* Contact Information */}
          <section>
            <h2 className="mb-4 font-semibold text-foreground">
              Contact Information
            </h2>

            <div className="rounded-xl border border-border-color bg-white p-4 shadow-card-shadow md:p-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-sm">
                    First Name
                  </label>

                  <Input
                    value={data.contact.firstName}
                    onChange={(e) =>
                      updateContact(
                        "firstName",
                        e.target.value,
                      )
                    }
                    placeholder="First Name"
                    className="h-10 border-border-color"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-sm">
                    Last Name
                  </label>

                  <Input
                    value={data.contact.lastName}
                    onChange={(e) =>
                      updateContact(
                        "lastName",
                        e.target.value,
                      )
                    }
                    placeholder="Last Name"
                    className="h-10 border-border-color"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm">
                    Phone Number
                  </label>

                  <Input
                    value={data.contact.phone}
                    onChange={(e) =>
                      updateContact(
                        "phone",
                        e.target.value,
                      )
                    }
                    placeholder="+20 ***********"
                    className="h-10 border-border-color"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm">
                    Email
                  </label>

                  <Input
                    type="email"
                    value={data.contact.email}
                    onChange={(e) =>
                      updateContact(
                        "email",
                        e.target.value,
                      )
                    }
                    placeholder="example@gmail.com"
                    className="h-10 border-border-color"
                  />
                </div>
              </div>

              {/* Create Account */}
              <label className="mt-5 flex cursor-pointer items-center gap-2 text-sm text-app-muted">
                <input
                  type="checkbox"
                  className="accent-app-main"
                />

                <span>
                  Create an account for easier checkout
                  next time
                </span>
              </label>
            </div>
          </section>

          {/* Customize Your Delivery */}
          <section>
            <h2 className="mb-4 font-semibold text-foreground">
              Customize Your Delivery
            </h2>

            <div className="space-y-7 rounded-xl border border-border-color bg-white p-4 shadow-card-shadow md:p-5">
              {/* Fulfilment */}
              <div>
                <label className="mb-2 block text-sm">
                  Fulfilment Method
                </label>

                <div className="grid max-w-md grid-cols-2 gap-10">
                  <Button
                    type="button"
                    onClick={() =>
                      updateDelivery(
                        "fulfilmentMethod",
                        "delivery",
                      )
                    }
                    className={
                      data.delivery.fulfilmentMethod ===
                      "delivery"
                        ? "h-10 gap-2 bg-app-muted text-white hover:bg-app-main"
                        : "h-10 gap-2 border border-border-color bg-app-light-gray text-app-main hover:bg-app-light-gray"
                    }
                  >
                    <Truck size={18} />
                    Delivery
                  </Button>

                  <Button
                    type="button"
                    onClick={() =>
                      updateDelivery(
                        "fulfilmentMethod",
                        "pickup",
                      )
                    }
                    className={
                      data.delivery.fulfilmentMethod ===
                      "pickup"
                        ? "h-10 gap-2 bg-app-muted text-white hover:bg-app-main"
                        : "h-10 gap-2 border border-border-color bg-app-light-gray text-app-main hover:bg-app-light-gray"
                    }
                  >
                    <Car size={18} />
                    Pick-Up
                  </Button>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm">
                    Address
                  </label>

                  <Input
                    value={data.delivery.address}
                    onChange={(e) =>
                      updateDelivery(
                        "address",
                        e.target.value,
                      )
                    }
                    placeholder="Villa 14, Street 23, District 5, New Cairo, Cairo 11835"
                    className="h-10 border-border-color text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <Input
                    value={data.delivery.city}
                    onChange={(e) =>
                      updateDelivery(
                        "city",
                        e.target.value,
                      )
                    }
                    placeholder="City"
                    className="h-10 border-border-color"
                  />

                  <Input
                    value={data.delivery.province}
                    onChange={(e) =>
                      updateDelivery(
                        "province",
                        e.target.value,
                      )
                    }
                    placeholder="Province"
                    className="h-10 border-border-color"
                  />

                  <Input
                    value={data.delivery.postalCode}
                    onChange={(e) =>
                      updateDelivery(
                        "postalCode",
                        e.target.value,
                      )
                    }
                    placeholder="Postal Code"
                    className="h-10 border-border-color"
                  />
                </div>
              </div>

              {/* Schedule */}
              <div>
                <label className="mb-1 block text-sm">
                  Schedule Delivery
                </label>

                <div className="flex flex-wrap gap-3">
                  <Button
                    type="button"
                    onClick={() =>
                      updateDelivery(
                        "scheduleDelivery",
                        "now",
                      )
                    }
                    className={
                      data.delivery.scheduleDelivery ===
                      "now"
                        ? "h-10 gap-2 bg-app-muted text-white hover:bg-app-main"
                        : "h-10 gap-2 border border-border-color bg-app-light-gray text-app-main hover:bg-app-light-gray"
                    }
                  >
                    <Timer size={16} />
                    Deliver Now
                  </Button>

                  <Button
                    type="button"
                    onClick={() =>
                      updateDelivery(
                        "scheduleDelivery",
                        "later",
                      )
                    }
                    className={
                      data.delivery.scheduleDelivery ===
                      "later"
                        ? "h-10 gap-2 bg-app-muted text-white hover:bg-app-main"
                        : "h-10 gap-2 border border-border-color bg-app-light-gray text-app-main hover:bg-app-light-gray"
                    }
                  >
                    <Clock size={16} />
                    Deliver Later
                  </Button>
                </div>
              </div>

              {/* Speed */}
              <div>
                <label className="mb-1 block text-sm">
                  Delivery Speed
                </label>

                <div className="flex flex-wrap gap-3">
                  <Button
                    type="button"
                    onClick={() =>
                      updateDelivery(
                        "deliverySpeed",
                        "standard",
                      )
                    }
                    className={
                      data.delivery.deliverySpeed ===
                      "standard"
                        ? "h-10 gap-2 bg-app-muted text-white hover:bg-app-main"
                        : "h-10 gap-2 border border-border-color bg-app-light-gray text-app-main hover:bg-app-light-gray"
                    }
                  >
                    <Truck size={16} />
                    Standard
                  </Button>

                  <Button
                    type="button"
                    onClick={() =>
                      updateDelivery(
                        "deliverySpeed",
                        "priority",
                      )
                    }
                    className={
                      data.delivery.deliverySpeed ===
                      "priority"
                        ? "h-10 gap-2 bg-app-muted text-white hover:bg-app-main"
                        : "h-10 gap-2 border border-border-color bg-app-light-gray text-app-main hover:bg-app-light-gray"
                    }
                  >
                    <Zap size={16} />
                    Priority
                  </Button>
                </div>
              </div>

              {/* Estimated Arrival */}
              <div className="max-w-sm space-y-2">
                <label className="text-sm">
                  Estimated Arrival
                </label>

                <Input
                  readOnly
                  value="45 Min, Today at 2:30 PM"
                  className="h-10 border-border-color bg-app-light-gray text-app-muted"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right Side */}
        <OrderSummary />
      </div>

      {/* Special Notes */}
      <section>
        <h2 className="mb-4 font-semibold text-foreground">
          Special Notes
        </h2>

        <div className="rounded-xl border border-border-color bg-white p-5 shadow-card-shadow md:p-7">
          <div className="mb-4 flex flex-wrap gap-2">
            {[
              "Leave order in front of the door",
              "Don't ring bell",
              "Call 30 min in advance",
            ].map((note) => (
              <button
                key={note}
                type="button"
                onClick={() => setSpecialNote(note)}
                className={
                  specialNote === note
                    ? "rounded-lg border border-app-main bg-app-main px-4 py-2 text-sm text-white"
                    : "rounded-lg border border-border-color px-4 py-2 text-sm text-app-muted transition hover:border-app-main hover:text-app-main"
                }
              >
                {note}
              </button>
            ))}
          </div>

          <Input
            value={specialNote}
            onChange={(e) =>
              setSpecialNote(e.target.value)
            }
            placeholder="Add any specific instructions..."
            className="h-10 border-border-color"
          />
        </div>
      </section>

      {/* Continue */}
      <Button
        type="button"
        onClick={onContinue}
        className="h-12 w-full rounded-lg bg-app-main text-white hover:bg-app-main/90 sm:w-64"
      >
        Continue to Payment
      </Button>
    </div>
  );
};

export default DeliverySteps;