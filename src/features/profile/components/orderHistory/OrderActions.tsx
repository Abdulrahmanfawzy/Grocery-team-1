import { Button } from '@/components/ui/Button'
import { FileText, RefreshCw, Star } from 'lucide-react'

export default function OrderActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Download Receipt */}

      <Button type="button" variant={'outline'} size={'lg'}>
        <FileText size={20} className="mr-1.5 " />
        Download Receipt
      </Button>

      {/* Favorite */}
      <Button type="button" variant={'outline'} size={'lg'}>
        <Star className="mr-1.5 " size={20} />
        Rate
      </Button>

      {/* Reorder */}

      <Button type="button" size={'lg'} className={'text-xs font-semibold '}>
        <RefreshCw size={20} className="mr-1.5 " />
        Reorder
      </Button>
    </div>
  )
}
