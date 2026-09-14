import { Check } from 'lucide-react'

type DeliveryWindow = {
  id: string
  name: string
  time: string
}

export default function DeliveryWindowItem({
  window,
  selected,
  onSelect,
}: {
  window: DeliveryWindow
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        relative
        flex
        min-h-16.5
        flex-1
        flex-col
        justify-center
        rounded-lg
        border
        px-4
        py-3
        text-left
        transition
        ${
          selected
            ? 'border-main-app bg-white'
            : 'border-transparent bg-[#f5fafc] hover:border-slate-300'
        }
      `}
    >
      {/* Selected icon */}

      {selected && (
        <span
          className="
            absolute
            right-2
            top-2
            flex
            h-4
            w-4
            items-center
            justify-center
            rounded-full
            border
            border-app-main
          "
        >
          <Check size={18} className=" text-app-main" />
        </span>
      )}

      <span
        className={`
          text-md
          font-medium
          ${selected ? 'text-app-main' : 'text-slate-700'}
        `}
      >
        {window.name}
      </span>

      <span className="mt-1 text-xs text-slate-600">{window.time}</span>
    </button>
  )
}
