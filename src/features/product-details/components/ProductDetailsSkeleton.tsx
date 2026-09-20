import { Skeleton } from '@/components/ui/skeleton'

const ProductDetailsSkeleton = () => {
  return (
    <section className="grid gap-8 md:grid-cols-2" aria-label="Loading product details">
      <Skeleton className="aspect-square rounded-lg" />

      <div className="space-y-6 py-2">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-7 w-1/4" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="flex gap-4">
          <Skeleton className="h-12 w-28" />
          <Skeleton className="h-12 flex-1" />
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsSkeleton
