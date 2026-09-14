import { useState } from 'react'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/Button'

import imgVISA from '@/assets/images/profile/VISA.png'
import imgMasterCard from '@/assets/images/profile/master-card.png'

import SavedCardItem from './SavedCardItem'

export type SavedCard = {
  id: string
  lastFour: string
  type: string
  name: string
  image: string
}

const savedCards: SavedCard[] = [
  {
    id: 'card-1',
    lastFour: '4242',
    type: 'Visa',
    name: 'Visa',
    image: imgVISA,
  },
  {
    id: 'card-2',
    lastFour: '8888',
    type: 'Mastercard',
    name: 'Mastercard',
    image: imgMasterCard,
  },
]

export default function SavedCards() {
  const [selectedCardId, setSelectedCardId] = useState(
    savedCards.find((card) => card.id === 'card-2')?.id ?? '',
  )

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-slate-900">Saved Cards</h3>

      <div className="space-y-2">
        {savedCards.map((card) => (
          <SavedCardItem
            key={card.id}
            card={card}
            selected={selectedCardId === card.id}
            onSelect={() => setSelectedCardId(card.id)}
          />
        ))}
      </div>

      {/* Add Card */}
      <Button
        type="button"
        variant="outline"
        className="
          mt-3
          h-10
          w-full
          justify-start
          gap-2
          rounded-md
          border-slate-200
          text-sm
          font-normal
          text-slate-700
          shadow-none
          transition
          hover:border-app-main/30
          hover:bg-slate-50
          hover:text-app-main
        "
      >
        <Plus className="h-4 w-4" />
        Add New Card
      </Button>
    </div>
  )
}
