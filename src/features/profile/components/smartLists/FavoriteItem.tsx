import { Button } from '@/components/ui/Button'

type FavoriteItem = {
  id: string
  name: string
  price: string
  image: string
}
export default function FavoriteItem({
  item,
  onAdd,
}: {
  item: FavoriteItem
  onAdd: (id: string) => void
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-md
        border
        border-slate-300
        bg-white
        px-3
        py-2.5
      "
    >
      {/* Product image */}

      <div
        className="
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          text-xl
        "
      >
        {item.image}
      </div>

      {/* Product info */}

      <div className="min-w-0 flex-1">
        <p className="truncate text-md font-medium text-slate-800">{item.name}</p>

        <p className="mt-0.5 text-xs text-slate-700">{item.price}</p>
      </div>

      {/* Add */}

      <Button
        type="button"
        onClick={() => onAdd(item.id)}
        className="
        h-9
        px-4
        
        "
        size={"sm"}
      >
        Add
      </Button>
    </div>
  )
}
