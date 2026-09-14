type ProgressItemProps = {
  title: string
  percentage: string
  value: number
}

export default function ProgressItem({ title, percentage, value }: ProgressItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-linear-to-r from-gray-100 from-7% via-[#47768F] via-30% to-[#014162] to-90%"
          style={{
            width: `${value}%`,
          }}
        />
      </div>

      <span className="w-40 text-xs text-app-main">
        {title} ({percentage})
      </span>
    </div>
  )
}
