/* =========================================================
   TYPES
========================================================= */

import { Check } from 'lucide-react'

type PaymentTransaction = {
  id: string
  orderId: string
  date: string
  amount: string
  status: 'Completed' | 'Pending'
}

export default function TransactionItem({ transaction }: { transaction: PaymentTransaction }) {
  const isPositive = transaction.amount.startsWith('+')

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-lg
        border
        border-slate-100
        bg-white
        px-3
        py-3
      "
    >
      {/* Left */}
      <div>
        <p className="text-xs font-medium text-slate-800">Order {transaction.orderId}</p>

        <p className="mt-1 text-xxs text-slate-400">{transaction.date}</p>
      </div>

      {/* Right */}
      <div className="text-right">
        <p
          className={`
            text-xs
            font-medium
            ${isPositive ? 'text-emerald-600' : 'text-slate-800'}
          `}
        >
          {transaction.amount}
        </p>

        <span className="mt-2 inline-flex items-center gap-1 rounded-sm bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600">
          <Check className="h-4 w-4" />
          {transaction.status}
        </span>
      </div>
    </div>
  )
}
