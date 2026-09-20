import type { Product } from '@/types/products.type'
import { Countdown } from './CountDown'
import { ProductCard } from './ProductCard'

interface BestSellersSectionProps {
  products: Product[]
  isLoading?: boolean
}

export function BestSellersSection({ products, isLoading = false }: BestSellersSectionProps) {
  return (
    <section className="box-container py-8 sm:py-10">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-slate-700 sm:text-2xl md:text-[28px]">
          Daily Best Sells
        </h2>
        <Countdown />
      </div>
      {isLoading ? (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded border border-slate-100 bg-slate-100"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="relative min-w-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
