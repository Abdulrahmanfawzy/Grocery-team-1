import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ReviewsContent from './ReviewsContent'
import DescriptionContent from './DescriptionContent'
import NutritionalContent from './NutritionalContent'

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

        <TabsContent value="description">
          <DescriptionContent />
        </TabsContent>

        <TabsContent value="reviews">
          <ReviewsContent />
        </TabsContent>

        <TabsContent value="nutritional-facts">
          <NutritionalContent />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProductTabs
