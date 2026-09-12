import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star } from 'lucide-react'
import AvatarImg from '@/assets/images/avatar.jpg'
const MoreProductContent = () => {
  return (
    <>
      <ProductTabs />
    </>
  )
}

const ProductTabs = () => {
  return (
    <div className="p-2">
      <Tabs defaultValue="reviews">
        {/* ============ Tabs =============== */}
        <TabsList className={'gap-3.5 bg-transparent'}>
          <TabsTrigger
            className="bg-silver! shadow-none! data-active:bg-app-main! data-active:text-white! h-9 rounded-md"
            value="description"
          >
            Description
          </TabsTrigger>

          <TabsTrigger
            className="bg-silver! shadow-none! data-active:bg-app-main! data-active:text-white! h-9 rounded-md"
            value="reviews"
          >
            Reviews
          </TabsTrigger>

          <TabsTrigger
            className="bg-silver! shadow-none! data-active:bg-app-main! data-active:text-white! h-9 rounded-md"
            value="nutritional-facts"
          >
            Nutritional Facts
          </TabsTrigger>
        </TabsList>

        {/* ================ Tabs Content  ============== */}

        <TabsContent value="description">Description</TabsContent>

        <TabsContent value="reviews">
          <ReviewsContent />
        </TabsContent>

        <TabsContent value="nutritional-facts">Nutritional Facts</TabsContent>
      </Tabs>
    </div>
  )
}

const ReviewsContent = () => {
  return (
    <div className="space-y-3">
      {/* Review  */}
      {[1, 2, 3, 4].map(() => {
        return (
          <div className="flex items-start gap-3">
            <Avatar className="size-15 shrink-0">
              <AvatarImage src={AvatarImg} alt="Alaa Bassel" className={'rounded-lg'} />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>

            <div>
              <h3 className="text-12 font-normal text-black">Alaa Bassel</h3>

              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="size-5 fill-gold text-gold" />
                  ))}
                </div>

                <span className="text-base text-muted-foreground">(5/5)</span>
              </div>

              <p className="text-12  font-normal text-silver">Reviewed in 9th of December 2025</p>

              <p className="text-12 text-black font-normal">
                Super fresh and flavorful-arrived perfectly ripe.
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MoreProductContent
