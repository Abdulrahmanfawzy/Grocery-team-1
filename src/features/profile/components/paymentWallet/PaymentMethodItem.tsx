type PaymentMethod = {
  id: string
  name: string
  description: string
  icon: React.ElementType
}

export default function PaymentMethodItem({ method }: { method: PaymentMethod }) {
  const Icon = method.icon

  return (
    <button
      type="button"
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-lg
        border
        border-transparent
        px-3
        py-2.5
        text-left
        transition
        hover:border-slate-200
        hover:bg-slate-50
      "
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center">
        <Icon size={22} className=" text-slate-700" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-800">{method.name}</p>

        <p className="mt-0.5 truncate text-xxs text-slate-400">{method.description}</p>
      </div>
    </button>
  )
}
