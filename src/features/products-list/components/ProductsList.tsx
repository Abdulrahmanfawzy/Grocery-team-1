import { useProducts } from '@/hooks/useProducts'
import ProductCard from '../../../components/common/ProductCard'
import type { ProductsResponse } from '@/types/products.type'
import ProductsPagination from './ProductsPagination'
import { useSearchParams } from 'react-router-dom'
import { useRef } from 'react'
import ProductSkeleton from '@/components/common/ProductSkeleton'

const ProductsList = () => {
  const productsListRef = useRef(null)
  const handleScrollToProductsList = () => {
    productsListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const [searchParams, setSearchParams] = useSearchParams()
  // Get Page from URL Params
  const page = searchParams.get('page') || '1'

  // Set Page in URL Params
  const goToPage = (page: number) => {
    setSearchParams({ page: String(page) })
  }

  // Get Data from API
  const { data, isLoading, isSuccess, isError, error } = useProducts(Number(page))

  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <div
        ref={productsListRef}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Loading */}
        {isLoading && Array.from({ length: 6 }).map((_, index) => <ProductSkeleton key={index} />)}

        {/* Success */}
        {isSuccess &&
          data?.data.map((product: ProductsResponse['data'][0]) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {isSuccess && (
        <div className="my-4">
          <ProductsPagination
            scrollToProductsList={handleScrollToProductsList}
            goToPage={goToPage}
            current_page={data?.current_page}
            last_page={data?.last_page}
          />
        </div>
      )}
    </>
  )
}

export default ProductsList
