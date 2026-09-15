import { Button } from '@/components/ui/Button'
import OrderItem from './OrderItem'

export default function RecentOrders() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-medium text-app-main">Recent Orders</h2>

        <Button size={'sm'}>View All</Button>
      </div>

      <div className="mt-3">
        <OrderItem />
        <OrderItem />
        <OrderItem last />
      </div>
    </section>
  )
}
