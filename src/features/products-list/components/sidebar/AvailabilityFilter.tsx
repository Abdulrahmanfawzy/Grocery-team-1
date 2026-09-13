const AvailabilityFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-black">Availability</h3>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>In stock</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="size-4 accent-app-main" />
          <span>Out of stock</span>
        </label>
      </div>
    </div>
  )
}

export default AvailabilityFilter
