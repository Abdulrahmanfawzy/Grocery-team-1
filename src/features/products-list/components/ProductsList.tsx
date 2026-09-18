import { useProducts } from '@/hooks/useProducts'
import ProductCard from '../../../components/common/ProductCard'
import type { ProductsResponse } from '@/types/products.type'
import ProductsPagination from './ProductsPagination'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import ProductSkeleton from '@/components/common/ProductSkeleton'
import { toast } from 'react-toastify'
import EmptyProducts from '@/components/common/EmptyProducts'
import { useCart } from '@/features/Cart/hooks/useCart'
import type { AddCartItemRequest } from '@/features/Cart/types/cart.types'

const ProductsList = () => {
  const productsListRef = useRef(null)

  const handleScrollToProductsList = () => {
    productsListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    handleScrollToProductsList()
  }, [searchParams])

  // Get params from URL Params
  const params = {
    page: Number(searchParams.get('page')) || undefined,
    per_page: Number(searchParams.get('per_page')) || undefined,
    min_price: Number(searchParams.get('min_price')) || undefined,
    max_price: Number(searchParams.get('max_price')) || undefined,
    category_id: Number(searchParams.get('category_id')) || undefined,
    brand: searchParams.get('brand') || undefined,
    availability: searchParams.get('availability') || undefined,
    type: searchParams.get('type') || undefined,
    search: searchParams.get('search') || undefined,
  }

  // Get Data from API
  const { data, isLoading, isSuccess, isError, error } = useProducts(params)

  // Set Page in URL Params
  const goToPage = (page: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)

      params.set('page', String(page))

      return params
    })
  }

  useEffect(() => {
    if (isError) {
      toast.error(
        error?.response.data.message ||
          error.message ||
          'Something went wrong while fetching products.',
      )
    }
  }, [error, isError])

  // Handle Add Product to cart
  const [addingProductId, setAddingProductId] = useState<number | null>(null)
  const { addItem } = useCart()

  const handleAddToCart = (data: AddCartItemRequest) => {
    if (data) {
      setAddingProductId(data.product_id)
      addItem(data, {
        onSuccess: (data) => {
          console.log('addItem', data)

          // toast.success(data.message)
        },
        onError: (error) => {
          console.log('addItem', error.response)
          toast.error(error?.response?.data?.message)
        },
        onSettled() {
          setAddingProductId(null)
        },
      })
    }
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
            <ProductCard
              isAddToCart={addingProductId === product.id}
              handleAddToCart={handleAddToCart}
              key={product.id}
              product={product}
            />
          ))}
      </div>
      {/* If No Products */}
      {isError && <EmptyProducts />}

      {isSuccess && (
        <div className="my-4">
          <ProductsPagination
            scrollToProductsList={handleScrollToProductsList}
            goToPage={goToPage}
            current_page={data?.pagination?.current_page}
            last_page={data?.pagination?.last_page}
          />
        </div>
      )}
    </>
  )
}

export default ProductsList
