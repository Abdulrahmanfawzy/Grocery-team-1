import leftDecoration from '@/assets/images/products/winter-discoutn-left.svg'
import rightDecoration from '@/assets/images/products/winter-discoutn-right.svg'
import { Button } from '@/components'
import Countdown from './Countdown'
import { ChevronRight } from 'lucide-react'

const WinterDiscountCard = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-md bg-app-main/90 p-10">
      {/* Left decoration */}
      <img
        src={leftDecoration}
        alt="winter-discount-left"
        className="pointer-events-none absolute left-0 top-0 h-full w-auto"
      />

      {/* Right decoration */}
      <img
        src={rightDecoration}
        alt="winter-discount-right"
        className="pointer-events-none absolute right-0 top-0 h-full w-auto"
      />

      <div className="relative z-10 flex flex-col items-center gap-4 text-black">
        <h3 className="text-3xl font-regular">
          Winter <span className="text-white">Discounts</span>
        </h3>

        <p className="text-20 font-regular">Get 60% off - Limited Time Offer</p>

        <Countdown />

        <Button type="button" size={'lg'}>
          <span>Shop now</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

export default WinterDiscountCard
