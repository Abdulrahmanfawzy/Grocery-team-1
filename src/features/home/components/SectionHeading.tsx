import type { Category } from '@/types/categories.type'

interface SectionHeadingProps {
  title: string
  categories?: Category[]
  activeCategory?: number | null
  onCategoryChange?: (categoryId: number) => void
}

export function SectionHeading({
  title,
  categories = [],
  activeCategory,
  onCategoryChange,
}: SectionHeadingProps) {
  return (
    <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="text-2xl font-bold text-slate-700 sm:text-[28px]">{title}</h2>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-4 text-sm">
          {categories.map((category) => {
            const active = category.id === activeCategory

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange?.(category.id)}
                className={`transition-colors ${
                  active ? 'font-medium text-app-main' : 'text-slate-400 hover:text-app-main'
                }`}
              >
                {category.name_en}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
