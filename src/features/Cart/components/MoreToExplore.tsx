import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/common/Card";
import { Button } from "@/components/ui/Button";
import { Star, ShoppingCart, Plus, Trash2, Minus } from "lucide-react";

import Water from "@/assets/water.png";
import Vcola from "@/assets/vcola.png";
import Soda from "@/assets/soda.png";
import teaImage from "@/assets/tea.png";

const products = [
  {
    id: 1,
    name: "Spiro Spathis Lemon",
    price: 8.8,
    oldPrice: 11,
    image: Soda,
    inStock: true,
    discount: "Save 20%",
    isNew: true,
    rating: 3.8,
  },
  {
    id: 2,
    name: "V7 Cola - 300Ml",
    price: 15,
    image: Vcola,
    inStock: true,
    rating: 4,
  },
  {
    id: 3,
    name: "Nestlé Pure Life 6 L",
    price: 60,
    image: Water,
    inStock: true,
    rating: 5,
  },
  {
    id: 4,
    name: "Black Tea",
    price: 10,
    image: teaImage,
    inStock: true,
    rating: 4,
  },
];

interface ExploreProductCardProps {
  product: (typeof products)[number];
}

const ExploreProductCard = ({ product }: ExploreProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <Card className="overflow-hidden border-border shadow-none">
      <CardContent className="p-2">
        {/* Product Image */}
        <div className="relative flex h-[220px] items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-[150px] w-[150px] object-contain"
          />

          {/* Badges */}
          <div className="absolute left-2 top-2 flex items-center gap-1.5">
            {product.inStock && (
              <span className="rounded-t-lg rounded-br-lg bg-gradient-to-b from-app-main to-app-main/70 px-2 py-1 text-[10px] font-regular text-white">
                In Stock
              </span>
            )}

            {product.discount && (
              <span className="rounded-t-lg rounded-br-lg bg-gradient-to-b from-app-main to-app-main/70 px-2 py-1 text-[10px] font-regular text-white">
                {product.discount}
              </span>
            )}

            {product.isNew && (
              <span className="rounded-t-lg rounded-br-lg bg-gradient-to-b from-app-main to-app-main/70 px-2 py-1 text-[10px] font-regular text-white">
                New
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="px-1 pb-1">
          {/* Name + Price */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="line-clamp-1 text-sm font-medium text-foreground">
              {product.name}
            </h3>

            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                £ {product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-app-secondary line-through">
                  £ {product.oldPrice}
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
                    star <= Math.round(product.rating)
                      ? "text-app-gold fill-current"
                      : "text-app-secondary fill-current"
                  }
                />
              ))}
            </div>

            <span className="text-[10px] text-app-secondary">
              Rating ({product.rating}/5)
            </span>
          </div>

          {/* Add To Cart + Quantity */}
          <div className="mt-2 flex h-8 items-center gap-2">
            <Button
              type="button"
              className="h-8 bg-app-main px-5 text-xs text-white hover:bg-app-main/90"
            >
              <ShoppingCart className="size-4" />
              Add To Cart
            </Button>

            {/* Quantity */}
            <div className="flex h-8 items-center overflow-hidden rounded-md border border-border">
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                className="rounded-none text-app-main"
                onClick={decreaseQuantity}
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
  return (
    <section className="mt-10 pb-10">
      {/* Title */}
      <div className="mb-5">
        <h2 className="text-md font-medium text-foreground">
          More To Explore
        </h2>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto w-full max-w-[1100px]"
      >
        <CarouselContent className="-ml-3">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-full pl-3 sm:basis-1/2 lg:basis-[28%]"
            >
              <div className="h-full">
                <ExploreProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default MoreToExplore;