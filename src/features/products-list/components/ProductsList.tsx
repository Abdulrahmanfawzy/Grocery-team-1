import ProductCard from '../../../components/common/ProductCard'
import type { Product } from '@/types/products/products.type'
import image from '@/assets/images/products/img.png'

const ProductsList = () => {
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

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default ProductsList
