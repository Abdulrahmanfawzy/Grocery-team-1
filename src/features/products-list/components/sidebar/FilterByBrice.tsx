import { useState } from 'react'
import FilterHeaderTitle from './FilterHeaderTitle'
import { Slider } from '@/components/ui/slider'

const FilterByBrice = () => {
  const [priceRange, setPriceRange] = useState([100, 1000])
  const handlePriceChange = (value: number | readonly number[]) => {
    if (Array.isArray(value)) {
      setPriceRange([...value])
    }
  }
  return (
    <div className="flex flex-col gap-3 mt-10">
      {/* Header */}
      <FilterHeaderTitle title="Filter by price" />
      <div className="text-base flex justify-between items-center text-sidebar-color my-3">
        <span>Your Range :</span>
        <p className="flex items-center gap-1">
          <span>£{priceRange[0]} </span>-<span>£{priceRange[1]}</span>
        </p>
      </div>
      <Slider value={priceRange} onValueChange={handlePriceChange} min={0} max={1000} step={10} />
    </div>
  )
}

export default FilterByBrice
