import { useCart } from "@/features/Cart/hooks/useCart";
import CartItem from "@/features/Cart/components/CartItem";

const OrderSummary = () => {
  const { data: cartData } = useCart();

  const subtotal =
    cartData?.items?.reduce(
      (total, item) => {
        const price = Number(item.product.discount_price || item.product.price)
        return total + price * item.quantity
      },
      0,
    ) ?? 0;

  const shipping = Number((cartData as any)?.shipping ?? 0);

  const total = subtotal + shipping;

  return (
    <section>
      <h2 className="mb-4 text-base font-semibold text-foreground">
        Order Summary
      </h2>

      <div className="overflow-hidden rounded-lg border border-border-color bg-white shadow-card-shadow">
        {/* Products */}
        <div className="max-h-80 overflow-y-auto">
          {cartData?.items?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Total */}
        <div className="border-t border-border-color p-5">
          <h3 className="mb-5 font-semibold">
            Total Amount
          </h3>

          <div className="flex justify-between text-sm text-app-muted">
            <span>Subtotal</span>

            <span>
              £ {subtotal.toFixed(2)}
            </span>
          </div>

          <div className="mt-3 flex justify-between text-sm text-app-muted">
            <span>Shipping</span>

            <span>
              £ {shipping.toFixed(2)}
            </span>
          </div>

          <div className="my-3 border-t border-border-color" />

          <div className="flex justify-between text-sm font-semibold">
            <span>Total</span>

            <span>
              £ {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;