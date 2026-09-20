import { Skeleton } from '../ui/skeleton'

const ProductSkeleton = () => {
  return (
    <div className="space-y-3 w-full">
      <Skeleton className="h-31.25  rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 w-50" />
      </div>
    </div>
  )
}

export default ProductSkeleton
