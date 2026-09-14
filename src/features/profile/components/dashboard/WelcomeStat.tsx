type WelcomeStatProps = {
  icon: React.ReactNode
  title: string
  value: string
}

export default function WelcomeStat({ icon, title, value }: WelcomeStatProps) {
  return (
    <div className="rounded-md bg-white p-3 text-gray-700">
      <div className="flex items-center gap-2 text-gray-400">
        {icon}

        <span className="text-base">{title}</span>
      </div>

      <p className="mt-2 text-sm font-semibold text-gray-800">{value}</p>
    </div>
  )
}
