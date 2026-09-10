import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";

const CartSummary = () => {
  const { data } = useCart();

  const [promoCode, setPromoCode] = useState("Save10");
  const [address, setAddress] = useState("");

useEffect(() => {
  if (data?.address) {
    setAddress(data.address);
  }
}, [data?.address]);

  const subtotal =
    data?.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ) ?? 0;

  const shipping = data?.shipping ?? 0;
  const total = subtotal + shipping;

  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Total Amount */}
      <div>
        <h2 className="mb-4 text-base font-medium">
          Total Amount
        </h2>

        <div className="rounded-lg border border-gray-200 p-5">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Subtotal</span>
            <span>£ {subtotal.toFixed(2)}</span>
          </div>

          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>Shipping</span>
            <span>£ {shipping}</span>
          </div>

          <div className="my-3 border-t border-gray-200" />

          <div className="flex justify-between text-sm font-medium">
            <span>Total</span>
            <span>£ {total.toFixed(2)}</span>
          </div>

          <button
            type="button"
            className="mt-4 h-10 w-full rounded-md bg-app-main text-sm text-white transition hover:bg-[#004762]"
          >
            Go To Checkout
          </button>
        </div>
      </div>

      {/* Delivery Details */}
      <div>
        <h2 className="mb-4 text-base font-medium">
          Delivery Details & Promo Code
        </h2>

        <div className="rounded-lg border border-gray-200 p-5">
          {/* Promo */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2 text-sm">
              
              <span>Promo Code</span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="h-10 flex-1 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#00577A]"
              />

              <button
                type="button"
                className=" w-[153px] rounded-md bg-gray-300 px-5 text-sm text-app-main"
              >
                Apply Code
              </button>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm">
              
              <span>Delivery Address</span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="h-10  flex-1 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#00577A]"
              />

              <button
                type="button"
                className="w-[153px] rounded-md bg-gray-300 px-5 text-sm text-app-main"
              >
                
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;