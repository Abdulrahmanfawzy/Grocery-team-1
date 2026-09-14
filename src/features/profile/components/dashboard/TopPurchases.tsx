import { Button } from '@/components/ui/Button'
import PurchaseItem from './PurchaseItem'

const topPurchases = [
  {
    image: '🍌',
    title: 'Organic Bananas',
    subtitle: 'Bought 12 times',
  },
  {
    image: '🥛',
    title: 'Fresh Milk',
    subtitle: 'Bought 9 times',
  },
  {
    image: '🥚',
    title: 'Eggs',
    subtitle: 'Bought 8 times',
  },
  {
    image: '🍞',
    title: 'Bread',
    subtitle: 'Bought 7 times',
  },
]

export default function TopPurchases() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-medium text-app-main">Your Top Purchases</h2>

        <Button size="sm">Add as List</Button>
      </div>

      <div className="mt-4 space-y-3">
        {topPurchases.map((item) => (
          <PurchaseItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
