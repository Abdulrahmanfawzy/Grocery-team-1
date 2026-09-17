import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import { useParams } from 'react-router-dom'
import ProductGallery from '../components/ProductGallery'
import ProductContent from '../components/ProductContent'
// import image from '@/assets/images/products/img.png'
// import type { Product } from '@/types/products/products.type'
// import ProductCarousel from '@/components/common/ProductCarousel'
// import ProductCard from '@/components/common/ProductCard'
import ProductTabs from '../components/ProductTabs'
import useProductDetails from '../hooks/useProductDetails'
import { LoadingSpinner } from '@/components'

function ProductDetails() {
  // Get Params From URL
  const { productId } = useParams()

  const { data: product, isLoading, isSuccess } = useProductDetails(Number(productId))

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner size="lg" />
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
            <ProductGallery images={product.images} productName={product.name} />
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
        {/* <div className="my-14">
        <h2 className="text-20 text-black pb-4 px-2">Frequently Bought Together</h2>
        <ProductCarousel
          products={products}
          element={(product: Product) => <ProductCard product={product} />}
        />
      </div> */}

        {/* Carousel 2 */}
        {/* <div className="my-14">
        <h2 className="text-20 text-black pb-4 px-2">More To Explore</h2>
        <ProductCarousel
          products={products}
          element={(product: Product) => <ProductCard product={product} />}
        />
      </div> */}
      </div>
    )
  )
}

export default ProductDetails
