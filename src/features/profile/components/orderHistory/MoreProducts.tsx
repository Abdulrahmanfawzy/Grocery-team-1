export default function MoreProducts({ count }: { count: number }) {
  return (
    <div
      className="
        flex
        min-w-[90px]
        flex-1
        items-center
        justify-center
        rounded-lg
        bg-[#f5fafc]
        px-3
        py-2.5
      "
    >
      <span className="text-md font-medium text-slate-700">+{count} More</span>
    </div>
  )
}
