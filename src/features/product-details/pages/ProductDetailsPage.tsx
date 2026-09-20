import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import { useParams } from 'react-router-dom'
import ProductGallery from '../components/ProductGallery'
import ProductContent from '../components/ProductContent'
import ProductCarousel from '@/components/common/ProductCarousel'
import ProductCard from '@/components/common/ProductCard'
import ProductTabs from '../components/ProductTabs'
import useProductDetails from '../hooks/useProductDetails'
import ProductDetailsSkeleton from '../components/ProductDetailsSkeleton'
import { useProducts } from '@/hooks/useProducts'
import type { ProductsResponse } from '@/types/products.type'

import ProductSkeleton from '@/components/common/ProductSkeleton'
import { useProductsBoughtTogether } from '@/hooks/useProductsBoughtTogether'

function ProductDetails() {
  // Get Params From URL
  const { productId } = useParams()

  // Fetch Product Details
  const { data: product, isLoading, isSuccess } = useProductDetails(Number(productId))

  // Fetch Products Bought Together
  const { data: productsBoughtTogether, isLoading: isProductsBoughtTogetherLoading } =
    useProductsBoughtTogether(Number(productId))

  // Fetch More Products
  const { data: products, isLoading: isProductsLoading } = useProducts({})

  // Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ProductDetailsSkeleton />
      </div>
    )
  }

  return (
    isSuccess && (
      <div className="box-container">
        {/* Breadcrumb */}
        <div className="my-14">
          <AppBreadcrumb
            labelColor="text-app-main"
            breadcrumbItems={[
              {
                label: 'home',
                href: '/',
              },
              {
                label: 'categories',
                href: '/products',
              },
              {
                label: product.name,
                href: '/products',
              },
            ]}
          />
        </div>

        {/* Product Details Layout */}
        <div className="mb-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* ================= LEFT Product Gallery ================= */}
          <div>
            <ProductGallery images={product.image} productName={product.name} />
          </div>

          {/* ================= RIGHT Product Content ================= */}
          <div>
            <ProductContent productObject={product} />
          </div>
        </div>

        {/* More Product Content */}
        <div className="my-14">
          <ProductTabs product={product} />
        </div>

        {/* Carousel 1  */}
        <div className="my-14">
          <h2 className="text-20 text-black pb-4 px-2">Frequently Bought Together</h2>
          {isProductsBoughtTogetherLoading ? (
            Array.from({ length: 6 }).map((_, index) => <ProductSkeleton key={index} />)
          ) : (
            <ProductCarousel
              products={productsBoughtTogether && productsBoughtTogether?.data}
              element={(product: ProductsResponse['data'][0]) => <ProductCard product={product} />}
            />
          )}
        </div>

        {/* Carousel 2 */}
        <div className="my-14">
          <h2 className="text-20 text-black pb-4 px-2">More To Explore</h2>
          {isProductsLoading ? (
            Array.from({ length: 6 }).map((_, index) => <ProductSkeleton key={index} />)
          ) : (
            <ProductCarousel
              products={products && products?.data}
              element={(product: ProductsResponse['data'][0]) => <ProductCard product={product} />}
            />
          )}
        </div>
      </div>
    )
  )
}

export default ProductDetails
