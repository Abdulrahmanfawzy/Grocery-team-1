import type { RecentOrder } from '../../types/dashboard.types'

export default function OrderItem({ status, items_count, total, delivery_time }: RecentOrder) {
  return (
    <div
      className={`flex items-center justify-between py-3
      'border-b border-gray-100' 
      `}
    >
      <div>
        <p className="text-md font-medium text-app-main">#GP001</p>

        <p className="mt-1 text-xs text-gray-500">{delivery_time || "00:00"}</p>

        <p className="mt-1 text-xxs text-gray-400">{items_count} items</p>
      </div>

      <div className="text-right">
        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">{status}</span>

        <p className="mt-2 text-xs text-app-main">£{total}</p>
      </div>
    </div>
  )
}
