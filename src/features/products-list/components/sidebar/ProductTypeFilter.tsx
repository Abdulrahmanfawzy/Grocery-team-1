import { useSearchParams } from 'react-router-dom'

const productTypeList: string[] = ['Fresh', 'Organic', 'Frozen']

const ProductTypeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleProductTypeChange = (type: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams)
    if (checked) {
      params.set('type', type)
      params.set('page', '1')
    } else {
      params.delete('type', type)
      params.set('page', '1')
    }

    setSearchParams(params)
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-black mb-1">Product Type</h3>

      <div className="space-y-3">
        {productTypeList.map((type) => {
          return (
            <label key={type} className="flex items-center gap-2">
              <input
                checked={searchParams.get('type') === type}
                onChange={(e) => {
                  handleProductTypeChange(type, e.target.checked)
                }}
                type="checkbox"
                className="size-4 accent-app-main"
              />
              <span>{type}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default ProductTypeFilter
