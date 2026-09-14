import { useState } from 'react'

import ProfileHeader from '../components/ProfileHeader'
import AddressCard from '../components/addresses/AddressCard'
import PreferredDeliveryWindows from '../components/addresses/PreferredDeliveryWindows'
import { Button } from '@/components'
import { Plus } from 'lucide-react'

/* =========================================================
   TYPES
========================================================= */

type AddressType = 'Home' | 'Work'

type Address = {
  id: string
  type: AddressType
  address: string
  city: string
  instructions: string
}

/* =========================================================
   DATA
========================================================= */

const initialAddresses: Address[] = [
  {
    id: 'home',
    type: 'Home',
    address: 'Villa 14, Street 23, District 5, New Cairo,',
    city: 'Cairo',
    instructions: 'Ring doorbell. Leave at door if no answer.',
  },

  {
    id: 'work',
    type: 'Work',
    address: 'Office 9, Floor 2, 26 Talaat Harb Street,',
    city: 'Downtown Cairo, 11511',
    instructions: 'Ring doorbell. Leave at door if no answer.',
  },
]

/* =========================================================
   ADDRESS ICON
========================================================= */

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(initialAddresses)

  /* =======================================================
     DELETE ADDRESS
  ======================================================= */

  const handleDelete = (id: string) => {
    setAddresses((current) => current.filter((address) => address.id !== id))
  }

  /* =======================================================
     EDIT ADDRESS
  ======================================================= */

  const handleEdit = (id: string) => {
    console.log('Edit address:', id)
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
        <Button size={'lg'} className={'px-8'}>
          <Plus size={18} className="text-white " />
          Add Address
        </Button>
      </header>

      {/* =================================================
            ADDRESSES
        ================================================= */}

      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          onEdit={() => handleEdit(address.id)}
          onDelete={() => handleDelete(address.id)}
        />
      ))}

      {/* =================================================
            DELIVERY WINDOWS
        ================================================= */}

      <PreferredDeliveryWindows />
    </div>
  )
}
