import { Skeleton } from '../ui/skeleton'

const ProductSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-31.25 w-62.5 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-62.5" />
        <Skeleton className="h-4 w-50" />
      </div>
    </div>
  )
}

export default ProductSkeleton
