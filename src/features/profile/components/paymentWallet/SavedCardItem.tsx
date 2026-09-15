import { Check } from 'lucide-react'

import type { SavedCard } from './SavedCards'

type SavedCardItemProps = {
  card: SavedCard
  selected: boolean
  onSelect: () => void
}

export default function SavedCardItem({ card, selected, onSelect }: SavedCardItemProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`
        flex
        w-full
        items-center
        justify-between
        gap-3
        rounded-lg
        border
        px-3
        py-2.5
        text-left
        transition-all
        duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-app-main/20

        ${
          selected
            ? 'border-app-main bg-app-main/3 shadow-sm'
            : 'border-slate-200 bg-white hover:border-app-main/20 hover:bg-slate-50'
        }
      `}
    >
      <div className="caption flex gap-3 ">
        {/* Card Image */}
        <div
          className={`
          flex h-9 w-12 shrink-0 items-center justify-center
          overflow-hidden rounded-md border
          ${selected ? 'border-app-main/10 bg-white' : 'border-slate-100 bg-slate-50'}
        `}
        >
          <img
            src={card.image}
            alt={`${card.type} card`}
            className="h-full w-full object-contain p-1.5"
          />
        </div>
        {/* Card Info */}
        <div className="min-w-0 flex gap-y-1 flex-col ">
          <div className="flex gap-x-2">
            <p className="text-sm font-medium text-slate-800">{card.type}</p>

            <p className="mt-0.5 text-xs text-app-main">•••• {card.lastFour}</p>
          </div>
          <p className="text-gray-500 text-xxs">Expires 12/25</p>
        </div>
      </div>

      {/* Selection */}
      <span
        className={`
          flex h-5 w-5 shrink-0 items-center justify-center
          rounded-full border
          transition-all duration-200
          ${selected ? 'border-app-main bg-app-main text-white' : 'border-slate-300 bg-white'}
        `}
      >
        {selected && <Check className="h-3 w-3" strokeWidth={2.5} />}
      </span>
    </button>
  )
}
