import { CalendarDays, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function UpcomingDelivery() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} className="text-gray-500" />

          <h2 className="text-md font-medium text-gray-700">Upcoming Delivery</h2>
        </div>

        <Button variant={'outline'} size={'sm'}>
          Track
        </Button>
      </div>

      <div className="mt-5">
        <p className="text-md font-medium text-gray-700">Tomorrow, Nov 28</p>

        <p className="mt-1 text-xxs text-gray-400">12:00 - 14:00</p>

        <p className="mt-1 text-xxs text-gray-400">Order #123456789</p>
      </div>

      <Button className={'w-full mt-5 '} size={'lg'}>
        View Details
        <ArrowRight size={12} />
      </Button>
    </section>
  )
}
