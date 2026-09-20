import { Button } from '@/components/ui/Button'
import OrderItem from './OrderItem'
import type { DashboardData } from '../../types/dashboard.types'

export default function RecentOrders({ recent_orders }: DashboardData) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-medium text-app-main">Recent Orders</h2>

        <Button size={'sm'}>View All</Button>
      </div>

      <div className="mt-3">
        {recent_orders.map((order) => (
          <OrderItem
            delivery_time={order.delivery_time}
            items_count={order.items_count}
            status={order.status}
            total={order.total}
            id={order.id}
            key={order.id}
          />
        ))}
      </div>
    </section>
  )
}
