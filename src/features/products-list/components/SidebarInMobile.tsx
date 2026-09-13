import { FilterIcon } from 'lucide-react'
import FilterSidebar from './FilterSidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components'

const SidebarInMobile = () => {
  return (
    <Sheet>
      {/* Trigger Element To Open SideBar In Mobile */}
      <SheetTrigger
        render={
          <Button className={'px-5'}>
            <FilterIcon />
            <p className="text-20 font-semibold">Filter</p>
          </Button>
        }
      />
      {/* SideBar Content */}
      <SheetContent className="overflow-y-auto" side="left" showCloseButton={true}>
        <FilterSidebar />
      </SheetContent>
    </Sheet>
  )
}

export default SidebarInMobile
