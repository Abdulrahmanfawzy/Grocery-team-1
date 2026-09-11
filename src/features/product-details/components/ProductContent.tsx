import { Button } from '@/components'
import type { Product } from '@/types/products/products.type'
import { ChevronRight, Heart, Minus, Plus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const ProductContent = ({ productObject }: { productObject: Product }) => {
  const [productCount, setProductCount] = useState(1)

  const handleProductCountChange = (count: number) => {
    setProductCount(count)
  }
  return (
    <div className="flex flex-col px-8 py-3 gap-5">
      <h1 className="text-app-main text-2xl font-semibold">{productObject.name}</h1>
      <p className="text-12 font-normal">£ 25 | KG</p>

      <p className="text-md font-normal">£ 20</p>

      <div className="w-70  border-silver border" />

      {/* Quantity  */}
      <div className="w-30 flex flex-col gap-3">
        <p className="text-md  font-normal text-black">Quantity</p>
        <Button
          className="flex items-center justify-between rounded-xl border border-silver"
          variant={'outline'}
          size={'lg'}
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

      {/* Actions (Add to Cart) , (Add to favorite ) */}

      <div className="flex items-center gap-4">
        <Button size={'xl'} className="flex items-center gap-3">
          <ShoppingCart />
          <p>Add To Cart</p>
          <ChevronRight />
        </Button>
        <Button size={'xl'} variant={'secondary'} className="flex items-center gap-3">
          <Heart />
          <p>Add To Favorite</p>
        </Button>
      </div>
    </div>
  )
}

export default ProductContent
