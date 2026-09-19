import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import type { ReactNode } from 'react'
import type { ProductsResponse } from '@/types/products.type'

interface ProductCarouselPropsType {
  products: ProductsResponse['data']
  element: (product: ProductsResponse['data'][0]) => ReactNode
}

const ProductCarousel = ({ products, element }: ProductCarouselPropsType) => {
  console.log(products)

  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="mx-auto w-full max-w-275"
      >
        <CarouselContent className="-ml-3">
          {products &&
            products?.map((product: ProductsResponse['data'][0]) => (
              <CarouselItem
                key={product.id}
                className="basis-full pl-3 sm:basis-1/2 lg:basis-[28%]"
              >
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
