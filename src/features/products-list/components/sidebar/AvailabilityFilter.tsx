import { useSearchParams } from 'react-router-dom'

const AvailabilityList = [
  { label: 'In stock', paramValue: 'in_stock' },
  { label: 'Out of stock', paramValue: 'out_of_stock' },
]

const AvailabilityFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleAvailabilityFilter = (availability: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams)

    if (checked) {
      params.set('availability', availability)
      params.set('page', '1')
    } else {
      params.delete('availability', availability)
      params.set('page', '1')
    }

    setSearchParams(params)
  }
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-black">Availability</h3>

      <div className="space-y-3">
        {AvailabilityList.map((availability) => (
          <label key={availability.label} className="flex items-center gap-2">
            <input
              checked={searchParams.get('availability') === availability.paramValue}
              onChange={(e) => {
                handleAvailabilityFilter(availability.paramValue, e.target.checked)
              }}
              type="checkbox"
              className="size-4 accent-app-main"
            />
            <span>{availability.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default AvailabilityFilter
