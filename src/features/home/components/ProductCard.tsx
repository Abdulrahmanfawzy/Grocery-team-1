import { ShoppingCart } from 'lucide-react'
import type { ProductListItem } from '@/types/products/products.type'

interface ProductCardProps {
  product: ProductListItem
}

export function ProductCard({ product }: ProductCardProps) {
  const currentPrice = parseFloat(product.price)
  const oldPrice = product.discount_price ? parseFloat(product.discount_price) : null

  return (
    <article className="flex min-w-0 flex-col border border-slate-100 bg-white p-2.5 sm:p-3">
      <div className="flex h-32 items-center justify-center overflow-hidden bg-white sm:h-36">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <div className="mt-2 flex min-h-[82px] flex-col">
        <h3 className="mt-1 truncate text-xs font-medium text-slate-700 sm:text-sm">{product.name}</h3>
      </div>
      {/* 🟠 Bug: Rating UI is missing from the home product card
        The API may send average_rating, but this component never renders stars.
        So the rating cannot appear even when the backend sends it correctly.
        Fix: Render stars here using product.average_rating, not product.rating.
        ✅ Example Fix Syntax (DO NOT APPLY, just example):
        {[1, 2, 3, 4, 5].map((star) => <Star className={star <= Math.round(product.average_rating ?? 0) ? 'fill-gold text-gold' : 'text-slate-300'} />)} */}
      <div className="mt-auto flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-app-main sm:text-base">£{currentPrice}</span>
          {oldPrice && <del className="text-[9px] text-slate-300">£{oldPrice}</del>}
        </div>
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="inline-flex h-7 items-center gap-1 rounded-md bg-app-main px-2.5 text-[10px] font-medium text-white transition-colors hover:bg-app-main/90 sm:px-3"
        >
          <ShoppingCart size={11} />
          Add
        </button>
      </div>
    </article>
  )
}
