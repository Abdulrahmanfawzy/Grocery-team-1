import { Button } from '@/components'
import { Pencil, Trash2 } from 'lucide-react'

export default function AddressActions({
  onEdit,
  onDelete,
}: {
  onEdit: () => void
  onDelete: () => void
}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant={'outline'}
        onClick={onEdit}
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
        onClick={onDelete}

        size={'lg'}
      >
        <Trash2 size={16} className="mr-1 " />
        Cancel
      </Button>
    </div>
  )
}
