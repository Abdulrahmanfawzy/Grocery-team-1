import { Countdown } from './CountDown'
import { ProductCard } from './ProductCard'
import { bestSellers } from '../data/home.data'

export function BestSellersSection() {
  return (
    <section className="box-container py-8 sm:py-10">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-slate-700 sm:text-2xl md:text-[28px]">Daily Best Sells</h2>
        <Countdown />
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
        {bestSellers.map((product) => (
          <div key={product.id} className="relative min-w-0">
            {product.badge && (
              <span className={`absolute left-0 top-0 z-10 px-1.5 py-1 text-[8px] font-medium ${product.badge === 'Best deal' ? 'bg-sky-100 text-app-main' : 'bg-[#e6bf6e] text-white'}`}>
                {product.badge}
              </span>
            )}
            <ProductCard product={product} />
            <div className="px-3 pb-2">
              <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/2 bg-app-main" />
              </div>
              <p className="mt-1 text-[9px] text-slate-500">Sold: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
