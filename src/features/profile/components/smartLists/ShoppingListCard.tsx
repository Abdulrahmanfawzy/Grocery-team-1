import { Button } from '@/components/ui/Button'
import { ShoppingCart, Trash2 } from 'lucide-react'
type ShoppingList = {
  id: string
  name: string
  itemsCount: number
  updated: string
  image: string
}

export default function ShoppingListCard({
  list,
  onAddToCart,
}: {
  list: ShoppingList
  onAddToCart: (id: string) => void
}) {
  return (
    <div
      className="
        rounded-lg
        border
        border-slate-200
        bg-white
        p-6
        transition
        hover:border-slate-300
      "
    >
      {/* ================================================
          TOP
      ================================================= */}

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          {/* Image */}
          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-md
              bg-slate-50
              text-xl
            "
          >
            {list.image}
          </div>

          {/* Name */}
          <div className="min-w-0">
            <h3 className="truncate text-md font-medium text-slate-800">{list.name}</h3>

            <p className="mt-0.5 text-xs text-slate-400">{list.itemsCount} items</p>
          </div>
        </div>

        {/* Delete */}

        <Button variant={'destructive'}>
          <Trash2 />
        </Button>
      </div>

      {/* ================================================
          UPDATED
      ================================================= */}

      <p className="mt-2 text-xxs leading-tight text-slate-400">{list.updated}</p>

      {/* ================================================
          ACTIONS
      ================================================= */}

      <div className=" flex items-center mt-4 gap-2">
        <Button
          type="button"
          onClick={() => onAddToCart(list.id)}
          className="
            flex-1
            h-10
                      text-xs

           
          "
        >
          <ShoppingCart className="mr-1.5 h-3 w-3" />
          Add all to Cart
        </Button>

        <Button
          type="button"
          variant="outline"
          className="
          h-10
          text-xs
          "
        >
          Edit
        </Button>
      </div>
    </div>
  )
}
