import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import type { CartItem as CartItemType } from "../types/cart.types";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="flex gap-4 p-5">
      {/* Image + Stock */}
      <div className="flex w-16 shrink-0 flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden bg-muted">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-contain"
          />
        </div>

        <Badge className="mt-2 rounded-t-lg rounded-br-lg bg-foreground text-background text-[10px]">
          {item.inStock ? "In Stock" : "Out Of Stock"}
        </Badge>
      </div>

      {/* Product Details */}
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="line-clamp-2 text-sm font-medium">
          {item.name}
        </p>

        {/* Quantity + Price */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center overflow-hidden rounded-md border border-border">
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="rounded-md "
              onClick={decreaseQuantity}
            >
              {quantity === 1 ? <Trash2 /> : <Minus />}
            </Button>

            <span className="w-7 text-center text-sm font-medium">
              {quantity}
            </span>

            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="rounded-md"
              onClick={increaseQuantity}
            >
              <Plus />
            </Button>
          </div>

          <span className="text-sm font-semibold">
            £ {(item.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;