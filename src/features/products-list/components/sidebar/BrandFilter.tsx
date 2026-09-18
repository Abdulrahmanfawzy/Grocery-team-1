import { useSearchParams } from 'react-router-dom'

const brandList: string[] = [
  'Organic Valley',
  'Green Giant',
  'Dole',
  'Del Monte',
  'Nestle',
  'Kraft',
  'Fresh Express',
  'Horizon Organic',
]

const BrandFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleBrandChange = (brand: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams)

    if (checked) {
      params.set('brand', brand)
      params.set('page', '1')
    } else {
      params.delete('brand')
      params.set('page', '1')
    }

    setSearchParams(params)
  }

  return (
    <div>
      <h3 className="mb-1 text-lg font-medium text-black">Brand</h3>

      <div className="space-y-3">
        {brandList.map((brand) => (
          <label key={brand} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={searchParams.get('brand') === brand}
              onChange={(e) => handleBrandChange(brand, e.target.checked)}

              className="size-4 accent-app-main"
            />

            <span>{brand}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default BrandFilter
