interface SectionHeadingProps {
  title: string
  categories?: string[]
  activeCategory?: string
  onCategoryChange?: (category: string) => void
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
            const active = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange?.(category)}
                className={`transition-colors ${active ? 'font-medium text-app-main' : 'text-slate-400 hover:text-app-main'}`}
              >
                {category}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
