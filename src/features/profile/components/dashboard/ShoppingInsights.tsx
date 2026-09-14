import {
  DollarSign,
  ShoppingBag,
  BadgePercent,
  Star,
} from 'lucide-react'

import ProgressItem from '../ProgressItemProps'
import InsightCard from './InsightCard'

const insightStats = [
  {
    icon: DollarSign,
    title: 'Monthly Spend',
    value: '£342.18',
    subtitle: '+12% from last month',
  },
  {
    icon: ShoppingBag,
    title: 'Orders This Month',
    value: '6',
    subtitle: 'Even +3 days',
  },
  {
    icon: BadgePercent,
    title: 'Total Savings',
    value: '£48.50',
    subtitle: 'Coupons used',
  },
  {
    icon: Star,
    title: 'Avg Order Value',
    value: '£42.77',
    subtitle: 'Based on 6 orders',
  },
]

const shoppingProgress = [
  {
    title: 'Fresh Produce',
    percentage: '65%',
    value: 65,
  },
  {
    title: 'Dairy',
    percentage: '45%',
    value: 45,
  },
  {
    title: 'Bakery',
    percentage: '38%',
    value: 38,
  },
  {
    title: 'Snacks',
    percentage: '28%',
    value: 28,
  },
]

export default function ShoppingInsights() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="text-xs font-semibold text-gray-700">
        Your Shopping Insights
      </h2>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {insightStats.map(({ icon: Icon, ...stat }) => (
          <InsightCard
            key={stat.title}
            icon={<Icon size={13} />}
            {...stat}
          />
        ))}
      </div>

      {/* Progress */}
      <div className="mt-6 space-y-3">
        {shoppingProgress.map((item) => (
          <ProgressItem
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}