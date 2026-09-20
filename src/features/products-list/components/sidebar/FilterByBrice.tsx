import { useSearchParams } from 'react-router-dom'
import FilterHeaderTitle from './FilterHeaderTitle'
import { Slider } from '@/components/ui/slider'

const FilterByPrice = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const minPrice = Number(searchParams.get('min_price')) || 10
  const maxPrice = Number(searchParams.get('max_price')) || 500

  const priceRange = [minPrice, maxPrice]

  const handlePriceChange = (value: number[]) => {
    const newParams = new URLSearchParams(searchParams)

    newParams.set('min_price', String(value[0]))
    newParams.set('max_price', String(value[1]))

    newParams.set('page', '1')

    setSearchParams(newParams)
  }

  return (
    <div className="mt-10 flex flex-col gap-3">
      <FilterHeaderTitle title="Filter by price" />

      <div className="my-3 flex items-center justify-between text-base text-sidebar-color">
        <span>Your Range :</span>

        <p className="flex items-center gap-1">
          <span>£{priceRange[0]}</span>-<span>£{priceRange[1]}</span>
        </p>
      </div>

      <Slider
        value={priceRange}
        onValueChange={(e) => {
          handlePriceChange(e as number[])
        }}
        min={0}
        max={500}
        step={5}
      />
    </div>
  )
}

export default FilterByPrice
