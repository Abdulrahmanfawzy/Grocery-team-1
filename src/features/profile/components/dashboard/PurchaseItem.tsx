import { Plus } from 'lucide-react'
import type { TopPurchase } from '../../types/dashboard.types'

export default function PurchaseItem({ image, name, purchase_count }: TopPurchase) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center">
        <img src={image} className="rounded-full" alt="" />
      </div>
      <div className="flex-1">
        <p className="text-md font-medium text-gray-700">{name}</p>

        <p className="mt-1 text-xs text-gray-400">{purchase_count}</p>
      </div>

      <button className="flex h-6 w-6 items-center justify-center rounded bg-app-main text-white">
        <Plus size={12} />
      </button>
    </div>
  )
}
