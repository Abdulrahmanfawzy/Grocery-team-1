import { useState } from 'react'
import ShoppingListCard from './ShoppingListCard'
type ShoppingList = {
  id: string
  name: string
  itemsCount: number
  updated: string
  image: string
}

const shoppingLists: ShoppingList[] = [
  {
    id: 'weekly-essential',
    name: 'Weekly Essential',
    itemsCount: 24,
    updated: 'Updated 2 days ago',
    image: '🛒',
  },
  {
    id: 'stock-up',
    name: 'Stock_Up',
    itemsCount: 24,
    updated: 'Updated 1 week ago',
    image: '🥫',
  },
  {
    id: 'kids-snacks',
    name: 'Kids Snacks',
    itemsCount: 12,
    updated: 'Updated 3 days ago',
    image: '🍪',
  },
  {
    id: 'organic-only',
    name: 'Organic Only',
    itemsCount: 18,
    updated: 'Updated 5 days ago',
    image: '🥬',
  },
]

export default function ShoppingLists() {
  const [addedLists, setAddedLists] = useState<string[]>([])

  const handleAddToCart = (id: string) => {
    setAddedLists((current) => (current.includes(id) ? current : [...current, id]))
  }

  return (
    <section>
      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
        "
      >
        {shoppingLists.map((list) => (
          <ShoppingListCard key={list.id} list={list} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* {addedLists.length > 0 && (
        <p className="mt-2 text-[8px] text-emerald-600">
          {addedLists.length} list
          {addedLists.length > 1 ? 's' : ''} added to cart
        </p>
      )} */}
    </section>
  )
}
