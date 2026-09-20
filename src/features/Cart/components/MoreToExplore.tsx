import { useState } from "react";
import { Card, CardContent } from "@/components/common/Card";
import { Button } from "@/components/ui/Button";
import { Star, ShoppingCart, Plus, Trash2, Minus } from "lucide-react";
import ProductCarousel from "@/components/common/ProductCarousel";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "../hooks/useCart";
import type { Product } from "@/types/products.type";
import type { AddCartItemRequest } from "../types/cart.types";

interface ExploreProductCardProps {
  product: Product;
}

const ExploreProductCard = ({
  product,
}: ExploreProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addItem, isAddingItem } = useCart();

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    const data: AddCartItemRequest = {
      product_id: product.id,
      quantity,
    };

    addItem(data);
  };

  const price = Number(product.price);
  const discountPrice = product.discount_price
    ? Number(product.discount_price)
    : null;

  const displayPrice = discountPrice ?? price;

  return (
    <Card className="overflow-hidden border-border shadow-none">
      <CardContent className="p-2">
        {/* Product Image */}
        <div className="relative flex h-55 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-37.5 w-37.5 object-contain"
          />

          {/* Discount */}
          {discountPrice !== null && discountPrice < price && (
            <div className="absolute left-2 top-2">
              <span className="rounded-md bg-app-main px-2 py-1 text-[10px] text-white">
                Sale
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="px-1 pb-1">
          {/* Name + Price */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="line-clamp-1 text-sm font-medium text-foreground">
              {product.name}
            </h3>

            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                £ {(displayPrice * quantity).toFixed(2)}
              </span>

              {discountPrice !== null && discountPrice < price && (
                <span className="text-sm text-app-secondary line-through">
                  £ {(price * quantity).toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="mt-1 flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className={
                    star <= Math.round(product.average_rating)
                      ? "fill-current text-gold"
                      : "fill-current text-gray-200"
                  }
                />
              ))}
            </div>

            <span className="text-[10px] text-app-secondary">
              Rating ({product.average_rating}/5)
            </span>
          </div>

          {/* Add To Cart + Quantity */}
          <div className="mt-2 flex h-8 items-center gap-2">
            <Button
              type="button"
              onClick={handleAddToCart}
              disabled={isAddingItem}
              className="h-8 bg-app-main px-5 text-xs text-white hover:bg-app-main/90"
            >
              <ShoppingCart className="size-4" />

              {isAddingItem ? "Adding..." : "Add To Cart"}
            </Button>

            {/* Quantity */}
            <div className="flex h-8 items-center overflow-hidden rounded-md border border-border">
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                className="rounded-none text-app-main"
                onClick={decreaseQuantity}
                disabled={isAddingItem}
              >
                {quantity === 1 ? (
                  <Trash2 className="size-3" />
                ) : (
                  <Minus className="size-3" />
                )}
              </Button>

              <span className="w-19 text-center text-sm">
                {quantity}
              </span>

              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                className="rounded-none text-app-main"
                onClick={increaseQuantity}
                disabled={isAddingItem}
              >
                <Plus className="size-3" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MoreToExplore = () => {
  const { data, isError } = useProducts();

  if (isError) {
    return (
      <section className="mt-10 pb-10">
        <h2 className="text-md font-medium text-foreground">
          More To Explore
        </h2>

        <p className="mt-4 text-sm text-error">
          Failed to load products.
        </p>
      </section>
    );
  }

  // ProductsResponse.data is the actual products array
  const products = data?.data ?? [];

  return (
    <section className="mt-10 pb-10">
      <div className="mb-5">
        <h2 className="text-md font-medium text-foreground">
          More To Explore
        </h2>
      </div>

      <ProductCarousel
        products={products}
        element={(product) => (
          <ExploreProductCard product={product} />
        )}
      />
    </section>
  );
};

export default MoreToExplore;