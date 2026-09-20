import { Button } from '@/components/ui/Button'
import PurchaseItem from './PurchaseItem'
import type { DashboardData } from '../../types/dashboard.types'

export default function TopPurchases({ top_purchases }: DashboardData) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-medium text-app-main">Your Top Purchases</h2>

        <Button size="sm">Add as List</Button>
      </div>

      <div className="mt-4 space-y-3">
        {top_purchases.map((item) => (
          <PurchaseItem
            key={item.id}
            id={item.id}
            image={item.image}
            purchase_count={item.purchase_count}
            name={item.name}
          />
        ))}
      </div>
    </section>
  )
}
