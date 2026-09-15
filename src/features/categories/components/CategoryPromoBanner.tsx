import { useNavigate } from 'react-router-dom'
import { Button } from '@/components'
import heroImage from '@/assets/hero-produce.png'

export function CategoryPromoBanner() {
  const navigate = useNavigate()

  return (
    <section className="box-container py-10 sm:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="relative flex min-h-[220px] items-center justify-center">
          <div
            className="absolute start-1/2 top-0 z-10 flex size-20 -translate-x-1/2 
          items-center justify-center rounded-full bg-app-main text-center text-xs 
          font-semibold leading-4 text-white"
          >
            Up to
            <br />
            30% off
          </div>

          <img
            src={heroImage}
            alt="Organic vegetables"
            className="mt-8 h-52 w-full object-contain sm:h-60"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-normal text-sidebar-color sm:text-3xl">
            Organic Vegetables Everyday
          </h2>

          <p className="mt-1 text-base text-app-main">Your online resource of healthy recipes.</p>

          <p className="mt-4 max-w-xl text-xs leading-5 text-sidebar-color/80 sm:text-sm">
            Lorem ipsum dolor sit amet consectetur. Bibendum et volutpat vitae nullam aenean tortor
            dolor eget ipsum. Tincidunt sem convallis ut vestibulum sed.
          </p>

          <Button
            type="button"
            className="mt-5 h-9 px-5 text-xs"
            onClick={() => navigate('/products?category=fresh-foods')}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  )
}
