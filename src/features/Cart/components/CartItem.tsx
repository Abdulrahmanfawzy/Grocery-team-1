import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../hooks/useCart";
import type { CartItem as CartItemType } from "../types/cart.types";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const {
    updateItem,
    deleteItem,
    isUpdatingItem,
    isDeletingItem,
  } = useCart();

  const isLoading = isUpdatingItem || isDeletingItem;

  const product = item.product;

  const price = Number(product.price);

  const discountPrice = product.discount_price
    ? Number(product.discount_price)
    : null;

  const displayPrice =
    discountPrice !== null && discountPrice < price
      ? discountPrice
      : price;

  const increaseQuantity = () => {
    updateItem({
      id: item.id,
      data: {
        quantity: item.quantity + 1,
      },
    });
  };

  const decreaseQuantity = () => {
    if (item.quantity === 1) {
      deleteItem(item.id);
      return;
    }

    updateItem({
      id: item.id,
      data: {
        quantity: item.quantity - 1,
      },
    });
  };

  return (
    <div className="flex gap-4 p-5">
      <div className="flex w-16 shrink-0 flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        <Badge className="mt-2 bg-foreground text-background text-[10px]">
          In Stock
        </Badge>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="line-clamp-2 text-sm font-medium">
          {product.name}
        </p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center overflow-hidden rounded-md border border-border">
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="rounded-md"
              onClick={decreaseQuantity}
              disabled={isLoading}
            >
              {item.quantity === 1 ? <Trash2 /> : <Minus />}
            </Button>

            <span className="w-7 text-center text-sm font-medium">
              {item.quantity}
            </span>

            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="rounded-md"
              onClick={increaseQuantity}
              disabled={isLoading}
            >
              <Plus />
            </Button>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold">
              £ {(displayPrice * item.quantity).toFixed(2)}
            </span>

            {discountPrice !== null &&
              discountPrice < price && (
                <span className="text-xs text-app-secondary line-through">
                  £ {(price * item.quantity).toFixed(2)}
                </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;