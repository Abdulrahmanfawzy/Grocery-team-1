import OrderCard from '../components/orderHistory/OrderCard'
import OrderFilters from '../components/orderHistory/OrderFilters'
import ProfileHeader from '../components/ProfileHeader'

/* =========================================================
   TYPES
========================================================= */

type Product = {
  id: string
  name: string
  quantity: number
  image: string
}

type Order = {
  id: string
  date: string
  itemsCount: number
  status: 'Completed' | 'Pending' | 'Cancelled'
  total: string
  products: Product[]
  moreItems: number
}

/* =========================================================
   DATA
========================================================= */

const orders: Order[] = [
  {
    id: '#GP001',
    date: 'Nov 24, 2025',
    itemsCount: 6,
    status: 'Completed',
    total: '£250.',
    moreItems: 4,

    products: [
      {
        id: 'orange',
        name: 'Prem ... Orange',
        quantity: 1,
        image: '🍊',
      },
      {
        id: 'banana',
        name: 'Prem ... Banana',
        quantity: 1,
        image: '🍌',
      },
    ],
  },

  {
    id: '#GP002',
    date: 'Nov 20, 2025',
    itemsCount: 8,
    status: 'Completed',
    total: '£450.',
    moreItems: 6,

    products: [
      {
        id: 'eggs',
        name: 'Eggs',
        quantity: 1,
        image: '🥚',
      },
      {
        id: 'milk',
        name: 'Milk',
        quantity: 2,
        image: '🥛',
      },
    ],
  },
]

export default function OrderHistory() {
  return (
    <div className=" space-y-10">
      {/* =================================================
            PAGE HEADER
        ================================================= */}
      <ProfileHeader title="Order History" description="View and manage all your past orders" />

      {/* =================================================
            FILTERS
        ================================================= */}

      <OrderFilters />

      {/* =================================================
            ORDERS
        ================================================= */}

      <section
        className="
            mt-7
            space-y-4
          "
      >
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </section>
    </div>
  )
}
