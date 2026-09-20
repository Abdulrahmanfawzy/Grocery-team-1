import { useCategories } from '@/hooks/useCategories'
import { X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

const CategoryFilter = () => {
  const { data, isSuccess } = useCategories()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleCategoryFilter = (category_id: number) => {
    const params = new URLSearchParams(searchParams)

    if (category_id) {
      params.set('category_id', String(category_id))
      params.set('page', '1')
    } else {
      params.delete('category_id', String(category_id))
      params.set('page', '1')
    }
    setSearchParams(params)
  }
  return (
    <div className="w-full">
      {/* Header */}
      <h3 className="text-lg font-medium p-4 text-black">Categories</h3>

      {/* Categories */}
      <div className="flex flex-col">
        {isSuccess &&
          data?.data.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryFilter(category.id)}
              className={`group cursor-pointer p-4   hover:bg-white ${searchParams.get('category_id') === String(category.id) && 'bg-white'} gap-4 text-left`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={category.image}
                    className="size-6 text-sidebar-color transition-colors group-hover:text-primary"
                  />

                  <span className="text-base text-sidebar-color transition-colors group-hover:text-primary">
                    {category.name_en}
                  </span>
                </div>
                {searchParams.get('category_id') === String(category.id) && (
                  <X
                    onClick={(e) => {
                      e.stopPropagation()
                      setSearchParams((prev) => {
                        const params = new URLSearchParams(prev)
                        params.delete('category_id')
                        params.set('page', '1')
                        return params
                      })
                    }}
                  />
                )}
              </div>
            </button>
          ))}
      </div>
    </div>
  )
}

export default CategoryFilter
