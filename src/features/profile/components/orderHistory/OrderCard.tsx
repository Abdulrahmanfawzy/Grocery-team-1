import MoreProducts from './MoreProducts'
import OrderActions from './OrderActions'
import ProductItem from './ProductItem'
import StatusBadge from './StatusBadge'

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

export default function OrderCard({ order }: { order: Order }) {
  return (
    <article
      className="
        rounded-lg
        border
        border-slate-300
        bg-white
        p-4
        sm:p-5
        flex 
        flex-col
        gap-y-3
      "
    >
      {/* ================================================
          ORDER HEADER
      ================================================= */}

      <div
        className="
          flex
          items-center
          justify-between
          rounded-md
          border
          border-slate-300
          px-3
          py-2.5
        "
      >
        <div>
          <p className="text-md font-medium text-slate-800">Order {order.id}</p>

          <p className="mt-1 text-[12px] text-slate-400">
            {order.date}
            <span className="mx-1.5">·</span>
            {order.itemsCount} items
          </p>
        </div>

        <StatusBadge status={order.status} />
      </div>

      {/* ================================================
          PRODUCTS
      ================================================= */}

      <div
        className="
          mt-3
          grid
          grid-cols-1
          gap-2
          sm:grid-cols-3
        "
      >
        {order.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}

        <MoreProducts count={order.moreItems} />
      </div>

      {/* ================================================
          TOTAL + ACTIONS
      ================================================= */}

      <div
        className="
          mt-4
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Total */}

        <p
          className="
            text-md
            font-semibold
            text-app-main
          "
        >
          {order.total}
        </p>

        {/* Actions */}

        <OrderActions />
      </div>
    </article>
  )
}
