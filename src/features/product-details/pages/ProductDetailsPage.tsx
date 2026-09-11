import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import { useParams } from 'react-router-dom'
import ProductGallery from '../components/ProductGallery'
import ProductContent from '../components/ProductContent'
import image from '@/assets/images/products/img.png'
import type { Product } from '@/types/products/products.type'
import ProductCarousel from '@/components/common/ProductCarousel'
import ProductCard from '@/components/common/ProductCard'

function ProductDetails() {
  // Get Params From URL
  const { productId } = useParams()

  //  Products List
  const products: Product[] = [
    {
      id: 1,
      name: 'Peach',
      images: [
        'https://images.unsplash.com/photo-1594957672487-0d0a4f8f1a9b',
        'https://images.unsplash.com/photo-1619566636858-adf3ef46400b',
        'https://images.unsplash.com/photo-1604977042946-1eecc30f269e',
      ],
      image: image,
      price: 32.08,
      oldPrice: 35,
      rating: 3.8,
      inStock: true,
      isNew: true,
      discount: 20,
    },
    {
      id: 2,
      name: 'Apple',
      image: image,
      images: [
        image,
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
        'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a',
        'https://images.unsplash.com/photo-1599999905381-4a5c8f4e9c6d',
      ],
      price: 25,
      oldPrice: 30,
      rating: 4.5,
      inStock: true,
      isNew: false,
      discount: 15,
    },
    {
      id: 3,
      name: 'Banana',
      image: image,
      images: [
        image,
        'https://images.unsplash.com/photo-1528825871115-3581a5387919',
        'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e',
      ],
      price: 18,
      oldPrice: 22,
      rating: 4.2,
      inStock: true,
      isNew: true,
      discount: 10,
    },
    {
      id: 4,
      name: 'Orange',
      image: image,
      images: [
        image,
        'https://images.unsplash.com/photo-1557800636-894a64c1696f',
        'https://images.unsplash.com/photo-1582979512210-99b6a53386f9',
        'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
      ],
      price: 20,
      oldPrice: 24,
      rating: 4.1,
      inStock: true,
      isNew: false,
      discount: 10,
    },
  ]

  // Get Product
  const product = products.find((pro) => pro.id === Number(productId))

  if (!product) {
    return <h3>product details not Found .</h3>
  }

  return (
    <div className="box-container">
      {/* Breadcrumb */}
      <div className="my-14">
        <AppBreadcrumb
          lableColor="text-app-main"
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
        {/* ================= LEFT ================= */}
        <div>
          <ProductGallery images={product.images ?? [product.image]} productName={product.name} />
        </div>

        {/* ================= RIGHT ================= */}
        <div>
          <ProductContent productObject={product} />
        </div>
      </div>

      <div className="my-14">
        <h2 className="text-20 text-black pb-4 px-2">Frequently Bought Together</h2>
        <ProductCarousel
          products={products}
          element={(product: Product) => <ProductCard product={product} />}
        />
      </div>

      <div className="my-14">
        <h2 className="text-20 text-black pb-4 px-2">More To Explore</h2>
        <ProductCarousel
          products={products}
          element={(product: Product) => <ProductCard product={product} />}
        />
      </div>
    </div>
  )
}

export default ProductDetails
