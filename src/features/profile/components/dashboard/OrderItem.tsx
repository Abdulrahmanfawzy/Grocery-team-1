export default function OrderItem({ last = false }: { last?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between py-3 ${
        !last ? 'border-b border-gray-100' : ''
      }`}
    >
      <div>
        <p className="text-md font-medium text-app-main">#GP001</p>

        <p className="mt-1 text-xs text-gray-500">Nov 24, 2025</p>

        <p className="mt-1 text-xxs text-gray-400">5 items</p>
      </div>

      <div className="text-right">
        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">Delivered</span>

        <p className="mt-2 text-xs text-app-main">£45.32</p>
      </div>
    </div>
  )
}
