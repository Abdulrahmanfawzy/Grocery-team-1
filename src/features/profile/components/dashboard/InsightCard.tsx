type InsightCardProps = {
  icon: React.ReactNode
  title: string
  value: string
  subtitle: string
}
export default function InsightCard({ icon, title, value, subtitle }: InsightCardProps) {
  return (
    <div className="rounded-md bg-app-main p-3 text-white">
      <div className="flex items-center gap-1 text-white/70">
        {icon}

        <span className="text-xs">{title}</span>
      </div>

      <p className="mt-3 text-lg font-semibold">{value}</p>

      <p className="mt-1 text-xs text-white/60">{subtitle}</p>
    </div>
  )
}
