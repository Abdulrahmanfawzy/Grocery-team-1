import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ShoppingCart, ArrowRight } from 'lucide-react'

export default function CurrentCart() {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart size={18} className="text-gray-500" />

          <h2 className="text-md font-medium text-gray-700">Current Cart</h2>
        </div>

        <Link to={'/cart'}>
          <Button variant={'outline'} size={'sm'}>
            View Cart
          </Button>
        </Link>
      </div>

      <div className="mt-5 flex  justify-between">
        <div>
          <p className="text-md font-medium text-gray-700">5 items in cart</p>

          <p className="mt-1 text-xs text-gray-400">Last updated : 2 hours ago</p>
        </div>

        <span className="text-md text-gray-600">£28.45</span>
      </div>

     <Link to={"/"}>
      <Button className={'w-full mt-5 '} size={'lg'}>
        Continue Shopping
        <ArrowRight size={12} />
      </Button>
     </Link>
    </section>
  )
}
