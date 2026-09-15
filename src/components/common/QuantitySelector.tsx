import { Minus, Plus } from 'lucide-react'

type QuantitySelectorProps = {
  countChange: (count: number) => void
  productCount: number
}

const QuantitySelector = ({ countChange, productCount }: QuantitySelectorProps) => {
  return (
    <div className="flex h-9 flex-1 items-center justify-between rounded-xl border border-silver p-2">
      <button
        type="button"
        onClick={() => countChange(productCount - 1)}
        disabled={productCount === 1}
        aria-label="Remove"
        className="cursor-pointer text-app-main disabled:text-silver"
      >
        <Minus className="size-6" />
      </button>

      <span className="text-20">{productCount}</span>

      <button
        type="button"
        onClick={() => countChange(productCount + 1)}
        aria-label="Increase quantity"
        className="cursor-pointer text-app-main"
      >
        <Plus className="size-7" />
      </button>
    </div>
  )
}

export default QuantitySelector
