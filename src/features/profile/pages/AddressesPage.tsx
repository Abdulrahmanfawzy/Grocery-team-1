
import useAddress from '@/features/profile/hooks/address/useAddress'
import ProfileHeader from '../components/ProfileHeader'
import AddressCard from '../components/addresses/AddressCard'
import PreferredDeliveryWindows from '../components/addresses/PreferredDeliveryWindows'
import { Button } from '@/components'
import { Plus } from 'lucide-react'
import Loader from '../components/Loader'
import AddressDialog from '../components/addresses/AddressDialog'
import { useCreateAddress } from '../hooks/address/useCreateAddress'
import { useState } from 'react'


export default function AddressesPage() {
  const { data, isLoading } = useAddress()
  const { mutateAsync: createAddress, isPending: isCreating } = useCreateAddress()
  const [openModal, setOpenModal] = useState(false)

  if (isLoading) {
    return <Loader />
  }




  return (
    <div
      className="
         space-y-10
        "
    >
      {/* =================================================
            PAGE HEADER
        ================================================= */}

      <header className="flex  justify-between flex-wrap gap-y-10">
        <div className="caption">
          {/* caption */}
          <ProfileHeader
            title="Smart Lists & Favorites"
            description="Manage your delivery locations and preferences"
          />
        </div>
        <Button onClick={() => setOpenModal(true)} size={'lg'} className={'px-8'}>
          <Plus size={18} className="text-white " />
          Add Address
        </Button>
      </header>

      {/* =================================================
            ADDRESSES
        ================================================= */}

      {data?.data?.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
        />
      ))}


      {/* =================================================
            DELIVERY WINDOWS
        ================================================= */}

      <PreferredDeliveryWindows />


      {/* create Address */}
      <AddressDialog mood={'create'} open={openModal} onOpenChange={setOpenModal} onSubmit={(data) => createAddress(data)} isUpdate={isCreating} address={null} />
    </div>
  )
}
