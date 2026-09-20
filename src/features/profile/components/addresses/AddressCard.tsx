import DeliveryInstructions from './DeliveryInstructions'
import type { Address } from '../../types/address.types'
import { Home, Pencil, Trash2 } from 'lucide-react'
import useDeleteAddress from '../../hooks/address/useDeleteAddress'
import { useState } from 'react'
import useUpdateAddress from '../../hooks/address/useUpdateAddress'
import { Button } from '@/components'
import AddressDialog from './AddressDialog'




export default function AddressCard({ address }: { address: Address }) {
  const { mutate: deleteAddress, isPending: isDeleting } = useDeleteAddress()
  const [openModal, setOpenModal] = useState(false)
  const { mutate: updateAddress, isPending: isUpdating } = useUpdateAddress()
  // const { mutate: createAddress, isPending: isCreating } = useCreateAddress()



  return (
    <article
      className={`
        rounded-lg
        border
        border-slate-200
        bg-[#f7fbfd]
        p-4
        ${address.is_default ? 'border border-app-main!' : ''}
      `}
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Home size={19} className=" text-app-main" />

          <span className="text-md font-medium text-slate-800">{address.label}</span>
        </div>

        {/* actions */}
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant={'outline'}
            onClick={() => setOpenModal(true)}
            disabled={isUpdating}
            isLoading={isUpdating}
            className="
         
        "
            size={'lg'}
          >
            <Pencil size={16} className="mr-1 " />
            Edit
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={() => deleteAddress(address.id)}
            disabled={isDeleting}
            isLoading={isDeleting}
            size={'lg'}

          >
            <Trash2 size={16} className="mr-1 " />
            Cancel
          </Button>
        </div>   </div>

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

      <DeliveryInstructions postal_code={address.postal_code} provenance={address.provenance} />


      {/* =================================================
          EditAddressDialog
      ================================================= */}
      <AddressDialog mood={"update"} open={openModal} onOpenChange={setOpenModal} onSubmit={(data) => updateAddress({ data, id: address.id })} isUpdate={isUpdating} address={address} />

    </article>
  )
}
