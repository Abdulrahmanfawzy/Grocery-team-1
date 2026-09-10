import { Link } from 'react-router-dom'
import deliveryPerson from '@/assets/delivery-person.png'
import organicFruit from '@/assets/organic-fruit.png'

export function PromoBanners() {
  return (
    <section className="box-container grid gap-4 py-8 sm:grid-cols-2 sm:py-10">
      <article className="relative min-h-40 overflow-hidden rounded-md bg-[#c8c5c1] px-5 py-5 sm:px-6">
        <span className="inline-flex rounded bg-app-main px-2 py-1 text-[9px] font-semibold text-white">Free delivery</span>
        <h3 className="mt-3 max-w-[240px] text-xl font-bold text-app-main">Free delivery over $50</h3>
        <p className="mt-1 max-w-[220px] text-xs text-app-main">Shop $50 product and get free delivery anywhere.</p>
        <Link to="/products" className="mt-5 inline-flex rounded bg-app-main px-4 py-2 text-xs font-medium text-white">
          Shop Now <span className="ml-2">›</span>
        </Link>
        <img src={deliveryPerson} alt="Grocery delivery" className="absolute bottom-0 right-0 h-full w-1/2 object-contain object-bottom" />
      </article>

      <article className="relative min-h-40 overflow-hidden rounded-md bg-app-main px-5 py-5 text-white sm:px-6">
        <span className="inline-flex rounded bg-white/80 px-2 py-1 text-[9px] font-semibold text-app-main">60% off</span>
        <h3 className="mt-3 max-w-[220px] text-xl font-bold">Organic Food</h3>
        <p className="mt-1 max-w-[210px] text-xs">Save up to 60% off on your first order</p>
        <Link to="/products" className="mt-5 inline-flex rounded bg-white px-4 py-2 text-xs font-medium text-app-main">
          Shop Now <span className="ml-2">›</span>
        </Link>
        <img src={organicFruit} alt="Organic fruit" className="absolute bottom-0 right-0 h-full w-1/2 object-contain object-right-bottom" />
      </article>
    </section>
  )
}
