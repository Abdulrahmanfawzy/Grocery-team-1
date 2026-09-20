import { Button } from '@/components'
import QuantitySelector from '@/components/common/QuantitySelector'
import { useAddToCart } from '@/hooks/useAddToCart'
import type { ProductsResponse } from '@/types/products.type'
import { ChevronRight, Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const ProductContent = ({ productObject }: { productObject: ProductsResponse['data'][0] }) => {
  const [productCount, setProductCount] = useState(1)

  const { handleAddToCart, isAddingItem } = useAddToCart()

  const ProductQuantityChange = (count: number) => {
    setProductCount(count)
  }

  const totalPrice = (productCount: number, price: number) => {
    return productCount * price
  }

  return (
    <div className="flex flex-col px-8 py-3 gap-5">
      <h1 className="text-app-main text-2xl font-semibold">{productObject.name}</h1>
      <div className="flex  items-center gap-2">
        <p className="text-12 font-normal">
          £ {productObject.discount_price || productObject.price} | KG
        </p>

        {productObject.discount_price && (
          <p className="text-12 font-normal text-gray-500 line-through">
            £ {productObject.price} | KG
          </p>
        )}
      </div>

      {/* Total */}

      <p className="text-md font-normal">
        £ {totalPrice(productCount, Number(productObject.discount_price || productObject.price))}
      </p>

      <div className="w-70  border-silver border" />

      {/* Quantity  */}

      <div className="w-30">
        <p className="text-md mb-1  font-normal text-black">Quantity</p>
        <QuantitySelector countChange={ProductQuantityChange} productCount={productCount} />
      </div>

      {/* Actions (Add to Cart) , (Add to favorite ) */}
      <div className="flex items-center gap-4">
        <Button
          disabled={isAddingItem}
          onClick={() => {
            handleAddToCart({
              product_id: productObject.id,
              quantity: productCount,
            })
            setProductCount(1)
          }}
          size={'xl'}
          className="flex items-center gap-3"
        >
          {isAddingItem ? (
            'Loading...'
          ) : (
            <>
              <ShoppingCart />
              <p>Add To Cart</p>
              <ChevronRight />
            </>
          )}
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
