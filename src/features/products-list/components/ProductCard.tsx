import { Card, CardContent } from '@/components/common'
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import productImage from '@/assets/images/products/img.png'
import { useState } from 'react'
import { Button } from '@/components'
const ProductCard = () => {
  const [productCount, setProductCount] = useState(1)

  const handleProductCountChange = (counte: number) => setProductCount(counte)

  return (
    <Card className="w-full overflow-hidden rounded-md border border-border-color bg-white p-0 shadow-none">
      <CardContent className="p-3">
        {/* Badges */}
        <div className="flex items-center gap-2">
          <Badge>In Stock</Badge>
          <Badge>Save 20%</Badge>
          <Badge>New</Badge>
        </div>

        {/* Product Image */}
        <div className="mt-0 flex items-center justify-center">
          <img src={productImage} alt="Peach" className="h-full w-full object-cover" />
        </div>

        {/* Product Info */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-base font-normal text-sidebar-color">Peach</h3>

            <span className="text-base text-sidbar-color">£ 32.08</span>

            <span className="text-base text-silver line-through">£ 35</span>
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={
                  star === 5 ? 'size-6 fill-silver text-silver' : 'size-6 fill-gold text-gold'
                }
              />
            ))}

            <span className="ml-1 text-xs text-silver">(3.8/5)</span>
          </div>

          {/* Actions */}
          <div className="mt-3 flex items-center gap-2">
            <Button variant={'default'} className="flex-1" size={'default'}>
              <ShoppingCart />
              Add To Cart
            </Button>

            <div className="flex flex-1 items-center justify-between rounded-xl border border-silver p-2 h-10">
              <button
                type="button"
                onClick={() => {
                  handleProductCountChange(productCount - 1)
                }}
                disabled={productCount == 1}
                aria-label="Remove"
                className="text-app-main disabled:text-silver cursor-pointer"
              >
                <Minus className="size-6" />
              </button>

              <span className="text-20">{productCount}</span>

              <button
                type="button"
                onClick={() => {
                  handleProductCountChange(productCount + 1)
                }}
                aria-label="Increase quantity"
                className="text-app-main cursor-pointer "
              >
                <Plus className="size-7" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="rounded-tl-xl rounded-br-xl bg-linear-to-b from-app-main via-app-main/80 to-app-main/50 px-2 py-1 text-12 text-white">
      {children}
    </span>
  )
}

export default ProductCard
