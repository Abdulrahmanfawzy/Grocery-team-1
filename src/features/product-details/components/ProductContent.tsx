import { Button } from '@/components'
import QuantitySelector from '@/components/common/QuantitySelector'
import type { Product } from '@/types/products/products.type'
import { ChevronRight, Heart, ShoppingCart } from 'lucide-react'

const ProductContent = ({ productObject }: { productObject: Product }) => {
  return (
    <div className="flex flex-col px-8 py-3 gap-5">
      <h1 className="text-app-main text-2xl font-semibold">{productObject.name}</h1>
      <p className="text-12 font-normal">£ 25 | KG</p>

      <p className="text-md font-normal">£ 20</p>

      <div className="w-70  border-silver border" />

      {/* Quantity  */}

      <div className="w-30">
        <p className="text-md mb-1  font-normal text-black">Quantity</p>
        <QuantitySelector />
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
