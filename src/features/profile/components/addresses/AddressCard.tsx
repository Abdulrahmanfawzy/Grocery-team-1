import { BriefcaseBusiness, Home } from 'lucide-react'
import DeliveryInstructions from './DeliveryInstructions'
import AddressActions from './AddressActions'
import AddressIcon from './AddressIcon'

type AddressType = 'Home' | 'Work'

type Address = {
  id: string
  type: AddressType
  address: string
  city: string
  instructions: string
}

export default function AddressCard({
  address,
  onEdit,
  onDelete,
}: {
  address: Address
  onEdit: () => void
  onDelete: () => void
}) {
  return (
    <article
      className="
        rounded-lg
        border
        border-slate-200
        bg-[#f7fbfd]
        p-4
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <AddressIcon type={address.type} />

          <span className="text-md font-medium text-slate-800">{address.type}</span>
        </div>

        <AddressActions onEdit={onEdit} onDelete={onDelete} />
      </div>

      {/* =================================================
          ADDRESS
      ================================================= */}

        <p className=" text-xs leading-5 text-slate-500">
          {address.address}
          <br />
          <span className='font-bold mt-1' >{address.city}</span>
        </p>

      {/* =================================================
          INSTRUCTIONS
      ================================================= */}

      <DeliveryInstructions instructions={address.instructions} />
    </article>
  )
}
