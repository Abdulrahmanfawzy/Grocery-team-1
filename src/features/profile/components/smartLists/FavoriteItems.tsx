import { Button } from '@/components'
import { Star } from 'lucide-react'
import { useState } from 'react'
import FavoriteItem from './FavoriteItem'

type FavoriteItem = {
  id: string
  name: string
  price: string
  image: string
}
const favoriteItems: FavoriteItem[] = [
  {
    id: 'banana',
    name: 'Organic Bananas',
    price: '£20.9',
    image: '🍌',
  },
  {
    id: 'milk',
    name: 'Fresh Milk - 1L',
    price: '£12.7',
    image: '🥛',
  },
  {
    id: 'eggs',
    name: 'Eggs',
    price: '£32.9',
    image: '🥚',
  },
  {
    id: 'butter',
    name: 'Butter',
    price: '£40.9',
    image: '🧈',
  },
]

export default function FavoriteItems() {
  const [addedItems, setAddedItems] = useState<string[]>([])

  const handleAdd = (id: string) => {
    setAddedItems((current) => (current.includes(id) ? current : [...current, id]))
  }

  return (
    <section
      className="
        rounded-lg
        border
        border-slate-300
        bg-white
        p-4 
        shadow
       
      "
    >
      {/* ================================================
          HEADER
      ================================================= */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star size={18} className=" text-slate-500" />

          <h2 className="text-md font-medium text-slate-800">Favorite Items</h2>
        </div>

        <Button
          variant={'link'}
          type="button"
          className="
            text-xs
          
          "
        >
          Manage Favorites
        </Button>
      </div>

      {/* ================================================
          ITEMS
      ================================================= */}

      <div
        className="
          mt-4
          grid
          grid-cols-1
          gap-2
          sm:grid-cols-2
        "
      >
        {favoriteItems.map((item) => (
          <FavoriteItem key={item.id} item={item} onAdd={handleAdd} />
        ))}
      </div>

      {/* ================================================
          ADD ALL
      ================================================= */}

      <Button
        type="button"
        variant="outline"
        className="
         w-full
         mt-5
        "
        size={'lg'}
      >
        Add All Favorites to Cart
      </Button>

      {/* Optional feedback */}
      {addedItems.length > 0 && (
        <p className="mt-2 text-xss text-emerald-600">
          {addedItems.length} item
          {addedItems.length > 1 ? 's' : ''} added to cart
        </p>
      )}
    </section>
  )
}
