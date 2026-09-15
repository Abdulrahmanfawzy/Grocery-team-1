import { Card, CardContent } from '@/components/common'
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components'
import type { Product } from '@/types/products/products.type'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [productCount, setProductCount] = useState(1)

  const handleProductCountChange = (count: number) => {
    setProductCount(count)
  }

  return (
    <Card className="w-full overflow-hidden rounded-md border border-border-color bg-white p-0 shadow-none">
      <CardContent className="p-3">
        {/* Badges */}
        <div className="flex items-center gap-2">
          {product.inStock && <Badge>In Stock</Badge>}

          {product.discount && <Badge>Save {product.discount}%</Badge>}

          {product.isNew && <Badge>New</Badge>}
        </div>

        {/* Product Image */}
        <Link to={`/products/${product.id}`}>
          <div className="mt-0 h-50 flex items-center justify-center">
            <img
              src={product.images?.[0] ?? product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        {/* Product Info */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-base font-normal text-sidebar-color">{product.name}</h3>

            <span className="text-base text-sidbar-color">£ {product.price}</span>

            <span className="text-base text-silver line-through">£ {product.oldPrice}</span>
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={
                  star <= Math.round(product.rating)
                    ? 'size-6 fill-gold text-gold'
                    : 'size-6 fill-silver text-silver'
                }
              />
            ))}

            <span className="ml-1 text-xs text-silver">({product.rating}/5)</span>
          </div>

          {/* Actions */}
          <div className="mt-3 flex items-center gap-2">
            <Button variant="default" className="flex-1" size="lg">
              <ShoppingCart />
              Add To Cart
            </Button>

            <Button
              variant={'outline'}
              className="flex h-9 flex-1 items-center justify-between rounded-xl border border-silver p-2"
            >
              <button
                type="button"
                onClick={() => handleProductCountChange(productCount - 1)}
                disabled={productCount === 1}
                aria-label="Remove"
                className="cursor-pointer text-app-main disabled:text-silver"
              >
                <Minus className="size-6" />
              </button>

              <span className="text-20">{productCount}</span>

              <button
                type="button"
                onClick={() => handleProductCountChange(productCount + 1)}
                aria-label="Increase quantity"
                className="cursor-pointer text-app-main"
              >
                <Plus className="size-7" />
              </button>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
