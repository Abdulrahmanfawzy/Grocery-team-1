import { Link } from 'react-router-dom'
import heroImage from '@/assets/hero-produce.png'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-app-main">
      <div className="absolute inset-0 bg-[url('/src/features/home/assets/hero-produce.png')] 
      bg-[length:0]"  aria-hidden="true" />
      
      <div className="box-container relative flex min-h-[280px] items-center 
       sm:min-h-[330px] sm:py-14 md:min-h-[360px]">
        <div className="max-w-xl">
          <p className="text-sm font-bold text-white sm:text-base">Don’t miss our daily</p>
          <h1 className="mt-1 text-4xl font-bold leading-[1.08] text-white 
          sm:text-5xl md:text-[52px]">
            amazing deals.
          </h1>
          <p className="mt-5 text-sm font-semibold text-white sm:text-base">Save up to 60% off on your first order</p>
          <Link
            to="/products"
            className="mt-9 inline-flex min-w-36 items-center justify-center rounded-md bg-white px-7 py-2.5 text-sm font-semibold text-slate-800 transition-transform hover:-translate-y-0.5"
          >
            Shop Now
          </Link>
        </div>
        <img
          src={heroImage}
          alt="Fresh vegetables and fruit"
          className="pointer-events-none absolute -right-20 bottom-0 h-[90%] w-[62%] object-contain sm:-right-10 md:right-0 md:w-[52%]"
        />
      </div>
    </section>
  )
}
