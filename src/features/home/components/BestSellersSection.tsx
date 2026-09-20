import { useBestSellers } from '../hooks/useHomeProducts'

import { Countdown } from './CountDown'
import ProductCard from '@/components/common/ProductCard'

export function BestSellersSection() {
  const { data, isLoading, isError } = useBestSellers(1)

  const products = data?.data ?? []

  return (
    <section className="box-container py-8 sm:py-10">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-slate-700 sm:text-2xl md:text-[28px]">
          Daily Best Sells
        </h2>

        <Countdown />
      </div>

      {isLoading && (
        <div className="py-8 text-center text-sm text-slate-400">Loading best sellers...</div>
      )}

      {isError && (
        <div className="py-8 text-center text-sm text-red-500">Failed to load best sellers.</div>
      )}

      {!isLoading && !isError && products.length === 0 && (
        <div className="py-8 text-center text-sm text-slate-400">No best sellers available.</div>
      )}

      {!isLoading && !isError && products.length > 0 && (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="relative min-w-0">
              <ProductCard product={product} />
              <div className="px-3 pb-2">
                <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-1/2 bg-app-main" />
                </div>
                <p className="mt-1 text-[9px] text-slate-500">Sold: {product.total_sold ?? 0}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
