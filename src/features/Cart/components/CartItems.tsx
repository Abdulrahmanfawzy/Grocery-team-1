import { Card } from "@/components/common/Card";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const CartItems = () => {
  const { data } = useCart();

  const items = data?.items ?? [];

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-md font-medium">
        Products In Cart
      </h2>

      <Card className="gap-0 overflow-hidden py-0">
        <div className="h-121 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex h-40 items-center justify-center">
              <p className="text-sm text-app-secondary">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className={[
                    idx % 2 === 0 ? "md:border-r" : "",
                    idx < items.length - 2 ? "border-b" : "",
                    "border-border",
                  ].join(" ")}
                >
                  <CartItem item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default CartItems;