
import {

  Banknote,
  Smartphone,
  Wallet,
  CircleDollarSign,
} from 'lucide-react'
import PaymentMethodItem from './PaymentMethodItem'


type PaymentMethod = {
  id: string
  name: string
  description: string
  icon: React.ElementType
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'cash',
    name: 'Cash on Delivery',
    description: 'Pay when you receive your order',
    icon: Banknote,
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    description: 'Quick checkout with Apple Pay',
    icon: Smartphone,
  },
  {
    id: 'google-pay',
    name: 'Google Pay',
    description: 'Quick checkout with Google Pay',
    icon: CircleDollarSign,
  },
  {
    id: 'wallet',
    name: 'Wallet Pay',
    description: 'Digital wallet payment',
    icon: Wallet,
  },
]
export default function OtherPaymentMethods() {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-slate-900">Other Payment Methods</h3>

      <div className="space-y-1">
        {paymentMethods.map((method) => (
          <PaymentMethodItem key={method.id} method={method} />
        ))}
      </div>
    </div>
  )
}
