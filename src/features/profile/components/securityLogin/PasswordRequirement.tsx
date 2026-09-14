import { CircleCheck } from 'lucide-react'
type PasswordRequirement = {
  id: string
  label: string
}

export default function PasswordRequirement({ requirement }: { requirement: PasswordRequirement }) {
  return (
    <div className="flex items-center gap-1.5">
      <CircleCheck className="h-3 w-3 text-app-main" />

      <span className="text-[12px] text-app-main">{requirement.label}</span>
    </div>
  )
}
