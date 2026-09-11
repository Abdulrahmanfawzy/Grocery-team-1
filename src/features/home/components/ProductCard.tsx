import { ShoppingCart } from 'lucide-react'
import type { HomeProduct } from '../data/home.data'

interface ProductCardProps {
  product: HomeProduct
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex min-w-0 flex-col border border-slate-100 bg-white p-2.5 sm:p-3">
      <div className="flex h-32 items-center justify-center overflow-hidden bg-white sm:h-36">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <div className="mt-2 flex min-h-[82px] flex-col">
        <span className="text-[10px] text-slate-400 sm:text-xs">{product.category}</span>
        <h3 className="mt-1 truncate text-xs font-medium text-slate-700 sm:text-sm">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs">
          <span className="tracking-[1px] text-base text-gold">{'★'.repeat(product.rating)}</span>
          <span className="text-slate-300">{'★'.repeat(5 - product.rating)}</span>
          <span className="text-slate-400">({product.reviews})</span>
        </div>
        <span className="text-[9px] text-slate-400">By {product.seller}</span>
      </div>
      <div className="mt-auto flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-app-main sm:text-base">£{product.price}</span>
          <del className="text-[9px] text-slate-300">£{product.oldPrice}</del>
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