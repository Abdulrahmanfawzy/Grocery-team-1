type ProductTypeListType = {
  label: string
}

const productTypeList: ProductTypeListType[] = [
  {
    label: 'Fresh',
  },
  {
    label: 'Organic',
  },
  {
    label: 'Frozen',
  },
]

const ProductTypeFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium text-black mb-1">Product Type</h3>

      <div className="space-y-3">
        {productTypeList.map((type) => {
          return (
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4 accent-app-main" />
              <span>{type.label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default ProductTypeFilter
