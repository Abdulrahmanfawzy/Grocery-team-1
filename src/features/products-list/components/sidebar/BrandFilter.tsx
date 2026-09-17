type BrandListType = {
  label: string
}

const brandList: BrandListType[] = [
  {
    label: 'Brand A',
  },
  {
    label: 'Brand B',
  },
  {
    label: 'Brand C',
  },
  {
    label: 'Brand E',
  },
]

const BrandFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-1 text-black">Brand</h3>
      <div className="space-y-3">
        {brandList.map(({ label }) => {
          return (
            <label key={label} className="flex items-center gap-2">
              <input type="checkbox" className="size-4 accent-app-main" />
              <span>{label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default BrandFilter
