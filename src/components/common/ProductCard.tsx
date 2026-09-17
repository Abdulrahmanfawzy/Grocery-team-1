import { Card, CardContent } from '@/components/common'
import { ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components'
import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge'
import QuantitySelector from './QuantitySelector'
import type { ProductsResponse } from '@/types/products.type'
import { useState } from 'react'
import type { AddToCartType } from '@/services/products.service'

const ProductCard = ({
  product,
  handleAddToCart,
  isAddToCart,
}: {
  product: ProductsResponse['data'][0]
  handleAddToCart: (data: AddToCartType) => void
  isAddToCart: boolean
}) => {
  const [productCount, setProductCount] = useState(1)

  const ProductQuantityChange = (count: number) => {
    setProductCount(count)
  }

  // Calc Product Discount
  const discount = () => {
    const discount = Number(product.price) - Number(product.discount_price)

    const discountPercent = (discount / Number(product.price)) * 100

    return Math.round(discountPercent)
  }

  return (
    <Card className="w-full overflow-hidden rounded-md border border-border-color bg-white p-0 shadow-none">
      <CardContent className="p-3">
        {/* Badges */}
        <div className="flex items-center gap-2">
          {product.quantity !== 0 && <Badge>In Stock</Badge>}
          {product.discount_price && <Badge>Save {discount()}%</Badge>}
        </div>

        {/* Product Image */}
        <Link to={`/products/${product.id}`}>
          <div className="mt-0 h-50 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
        </Link>

        {/* Product Info */}
        <div className="mt-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-base font-normal text-sidebar-color">{product.name}</h3>

            <div className="flex items-center gap-2">
              <span className="text-base text-sidebar-color">£ {product.price}</span>
              {product.discount_price && (
                <span className="text-base text-silver line-through">
                  £ {product.discount_price}
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={
                  star <= product.average_rating
                    ? 'size-4 fill-gold text-gold'
                    : 'size-4 text-silver'
                }
              />
            ))}
            <span className="ml-1 text-xs text-silver">({product.average_rating}/5)</span>
          </div>

          {/* Actions */}
          <div className="mt-3 flex items-center gap-2">
            <Button
              onClick={() => {
                handleAddToCart({
                  product_id: product.id,
                  quantity: productCount,
                })
                setProductCount(1)
              }}
              variant="default"
              className="flex-1"
              size="lg"
              disabled={isAddToCart}
            >
              {isAddToCart ? (
                'Loading...'
              ) : (
                <>
                  <ShoppingCart />
                  Add To Cart
                </>
              )}
            </Button>
            {/* Quantity Selector  */}
            <QuantitySelector countChange={ProductQuantityChange} productCount={productCount} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
