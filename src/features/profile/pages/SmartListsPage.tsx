import { Button } from '@/components'
import ArchivedLists from '../components/smartLists/ArchivedLists'
import FavoriteItems from '../components/smartLists/FavoriteItems'
import ShoppingLists from '../components/smartLists/ShoppingLists'
import { Plus } from 'lucide-react'
import ProfileHeader from '../components/ProfileHeader'

export default function SmartListsPage() {
  return (
    <div
      className="
         space-y-10
        "
    >
      {/* =================================================
            PAGE HEADER
        ================================================= */}
      <header className="flex  justify-between gap-y-10 flex-wrap">
        {/* caption */}
        <div className="caption">
          <ProfileHeader
            title="Smart Lists & Favorites"
            description="Organize your shopping with custom lists"
          />
        </div>
        <Button size={'lg'} className={'px-8'}>
          <Plus size={18} className="text-white " />
          Create New List
        </Button>
      </header>
      {/* =================================================
            SHOPPING LISTS
        ================================================= */}

      <ShoppingLists />

      {/* =================================================
            FAVORITE ITEMS
        ================================================= */}

      <FavoriteItems />

      {/* =================================================
            ARCHIVED LISTS
        ================================================= */}

      <ArchivedLists />
    </div>
  )
}
