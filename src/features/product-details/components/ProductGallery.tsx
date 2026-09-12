import { Badge } from '@/components/ui/Badge'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useState } from 'react'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="flex h-100 items-center justify-center relative rounded-xl">
        <img
          src={selectedImage}
          alt={productName}
          className="h-full w-fit rounded-xl object-contain"
        />

        {/* Badges */}
        <div className="flex items-center gap-2 absolute -top-6 left-6">
          <Badge>In Stock</Badge>
          <Badge>Save 20%</Badge>
          <Badge>New</Badge>
        </div>
      </div>

      {/* Small Images Carousel */}
      <div className="relative mt-4 px-10">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent className="cursor-pointer">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-1/4 sm:basis-1/5 md:basis-1/6">
                <button
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`h-20 w-full overflow-hidden cursor-pointer rounded-lg border-2 transition ${
                    selectedImage === image ? 'border-app-main' : 'border-silver'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productName} image ${index + 1}`}
                    className="h-full rounded w-full object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default ProductGallery
