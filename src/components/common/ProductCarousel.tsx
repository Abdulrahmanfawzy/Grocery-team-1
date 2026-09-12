import type { Product } from '@/types/products/products.type'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import type { ReactNode } from 'react'

interface ProductCarouselPropsType {
  products: Product[]
  element: (product: Product) => ReactNode
}

const ProductCarousel = ({ products, element }: ProductCarouselPropsType) => {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="mx-auto w-full max-w-[1100px]"
      >
        <CarouselContent className="-ml-3">
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-full pl-3 sm:basis-1/2 lg:basis-[28%]">
              <div className="h-full">{element(product)}</div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="border-none text-app-main hover:bg-app-main/10 hover:p-3.5" />

        <CarouselNext className="border-none text-app-main hover:bg-app-main/10 hover:p-3.5" />
      </Carousel>
    </>
  )
}

export default ProductCarousel
