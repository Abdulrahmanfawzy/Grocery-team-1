import { Plus } from 'lucide-react'

type PurchaseItemProps = {
  image: string
  title: string
  subtitle: string
}

export default function PurchaseItem({ image, title, subtitle }: PurchaseItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center">{image}</div>

      <div className="flex-1">
        <p className="text-md font-medium text-gray-700">{title}</p>

        <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
      </div>

      <button className="flex h-6 w-6 items-center justify-center rounded bg-app-main text-white">
        <Plus size={12} />
      </button>
    </div>
  )
}
