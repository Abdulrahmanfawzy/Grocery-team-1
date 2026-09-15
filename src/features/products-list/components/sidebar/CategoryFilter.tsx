import { Apple, Croissant, Fish, Milk, Drumstick } from 'lucide-react'

const categories = [
  {
    name: 'Fruits',
    icon: Apple,
  },
  {
    name: 'Dairy & Eggs',
    icon: Milk,
  },
  {
    name: 'Bakery',
    icon: Croissant,
  },
  {
    name: 'Seafood',
    icon: Fish,
  },
  {
    name: 'Meats',
    icon: Drumstick,
  },
]
const CategoryFilter = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <h3 className="text-lg font-medium p-4 text-black">Categories</h3>

      {/* Categories */}
      <div className="flex flex-col">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            className="group p-4 flex items-center hover:bg-white   gap-4 text-left"
          >
            <Icon
              className="size-6 text-sidebar-color transition-colors group-hover:text-primary"
              strokeWidth={1.5}
            />

            <span className="text-base text-sidebar-color transition-colors group-hover:text-primary">
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
