import { Truck } from 'lucide-react'

export default function DeliveryInstructions({ instructions }: { instructions: string }) {
  return (
    <div
      className="
        relative
        mt-4
        rounded-lg
        bg-[#e5e3e3]
        px-3
        py-3
      "
    >
      {/* Small corner shape */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-0
          w-0
          border-b-20
          border-l-20
          border-b-white
          border-l-transparent
        "
      />

      <div className="flex items-start gap-2">
        <Truck size={19} className="mt-0.5  shrink-0 text-app-main" />

        <div>
          <p className="text-xs font-medium text-app-main">Delivery Instructions</p>

          <p className="mt-1 text-xxs text-app-main">{instructions}</p>
        </div>
      </div>
    </div>
  )
}
