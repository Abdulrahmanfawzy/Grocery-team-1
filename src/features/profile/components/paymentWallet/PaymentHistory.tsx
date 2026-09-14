/* =========================================================
   TYPES
========================================================= */

import { Button } from '@/components'
import { ChevronRight } from 'lucide-react'
import TransactionItem from './TransactionItem'

type PaymentTransaction = {
  id: string
  orderId: string
  date: string
  amount: string
  status: 'Completed' | 'Pending'
}

/* =========================================================
   DATA
========================================================= */

const paymentHistory: PaymentTransaction[] = [
  {
    id: 'transaction-1',
    orderId: '#GP001',
    date: 'Nov 24, 2025',
    amount: '£45.32',
    status: 'Completed',
  },
  {
    id: 'transaction-2',
    orderId: '#GP001',
    date: 'Nov 20, 2025',
    amount: '+ £45.32',
    status: 'Completed',
  },
  {
    id: 'transaction-3',
    orderId: '#GP002',
    date: 'Nov 18, 2025',
    amount: '£67.89',
    status: 'Completed',
  },
]

export default function PaymentHistory() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="mb-3 text-md font-semibold text-slate-900">Payment History</h2>

      <div className="space-y-2">
        {paymentHistory.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>

      <Button
        type="button"
        size={"lg"}
        className="px-5
         
        "
      >
        View All Transactions
        <ChevronRight className="ml-1 h-3 w-3" />
      </Button>
    </section>
  )
}
