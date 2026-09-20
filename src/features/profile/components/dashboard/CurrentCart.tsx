import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import type { DashboardData } from '../../types/dashboard.types'

export default function CurrentCart({ last_order }: DashboardData) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart size={18} className="text-gray-500" />

          <h2 className="text-md font-medium text-gray-700">Current Cart</h2>
        </div>

        <Link to={'/cart'}>
          <Button variant={'outline'} size={'sm'}>
            View Cart
          </Button>
        </Link>
      </div>

      <div className="mt-5 flex  justify-between">
        <div>
          <p className="text-md font-medium text-gray-700">
            {last_order.total_items} items in cart
          </p>

          <p className="mt-1 text-xs text-gray-400">Last updated : {last_order.last_purchase}</p>
        </div>

        <span className="text-md text-gray-600">£{last_order.total}</span>
      </div>

      <Link to={'/'}>
        <Button className={'w-full mt-5 '} size={'lg'}>
          Continue Shopping
          <ArrowRight size={12} />
        </Button>
      </Link>
    </section>
  )
}
