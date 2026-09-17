import { ShoppingCart } from 'lucide-react'
import { useAddToCart } from '@/hooks/useAddToCart'
import type { Product } from '@/types/products.type'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { mutate, isPending } = useAddToCart()

  const handleAddToCart = () => {
    mutate({
      product_id: product.id,
      quantity: 1,
    })
  }

  const hasDiscount = product.discount_price !== null

  return (
    <article className="flex min-w-0 flex-col border border-slate-100 bg-white p-2.5 sm:p-3">
      <div className="flex h-32 items-center justify-center overflow-hidden bg-white sm:h-36">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>

      <div className="mt-2 flex min-h-20.5 flex-col">
        <h3 className="mt-1 truncate text-xs font-medium text-slate-700 sm:text-sm">
          {product.name}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs">
          <span className="tracking-[1px] text-base text-gold">
            {'★'.repeat(Math.round(product.average_rating))}
          </span>

          <span className="text-slate-400">({product.ratings?.length ?? 0})</span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-app-main sm:text-base">
            £{hasDiscount ? product.discount_price : product.price}
          </span>

          {hasDiscount && <del className="text-[9px] text-slate-300">£{product.price}</del>}
        </div>

        <button
          type="button"
          disabled={isPending}
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
          className="inline-flex h-7 items-center gap-1 rounded-md bg-app-main px-2.5 text-[10px] font-medium text-white transition-colors hover:bg-app-main/90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3"
        >
          <ShoppingCart size={11} />

          {isPending ? 'Adding...' : 'Add'}
        </button>
      </div>
    </article>
  )
}
