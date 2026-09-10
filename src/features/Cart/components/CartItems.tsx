import { Card } from "@/components/common/Card";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const CartItems = () => {
  const { data, isLoading, isError } = useCart();

  if (isLoading) {
    return (
      <section className="mt-8">
        <h2 className="mb-4 text-md font-medium">
          Products In Cart
        </h2>

        <Card className="flex h-[484px] items-center justify-center">
          <p className="text-sm text-app-muted">
            Loading cart...
          </p>
        </Card>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mt-8">
        <h2 className="mb-4 text-md font-medium">
          Products In Cart
        </h2>

        <Card className="flex h-[484px] items-center justify-center">
          <p className="text-sm text-error">
            Failed to load cart.
          </p>
        </Card>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-md font-medium">
        Products In Cart
      </h2>

      <Card className="gap-0 overflow-hidden py-0">
        <div className="h-[484px] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {data?.items.map((item, idx) => (
              <div
                key={item.id}
                className={[
                  idx % 2 === 0 ? "md:border-r" : "",
                  idx < data.items.length - 2 ? "border-b" : "",
                  "border-border",
                ].join(" ")}
              >
                <CartItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CartItems;