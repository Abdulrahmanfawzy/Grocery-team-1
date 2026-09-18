import { ShoppingBasket } from 'lucide-react'

const EmptyProducts = () => {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center px-5 text-center">
      <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-app-light-gray">
        <ShoppingBasket className="size-10 text-app-main" />
      </div>

      <h2 className="text-2.5xl font-bold text-app-main">No Products Found</h2>

      <p className="mt-3 max-w-md text-md text-app-muted">
        We couldn't find any products matching your current filters. Try adjusting your search or
        filters to discover more products.
      </p>
    </div>
  )
}

export default EmptyProducts
