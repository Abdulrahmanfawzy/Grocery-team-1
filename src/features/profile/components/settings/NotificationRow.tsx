import { Switch } from '@/components/ui/switch'

type NotificationRowProps = {
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export default function NotificationRow({ label, checked, onCheckedChange }: NotificationRowProps) {
  return (
    <div className="flex min-h-11 border-b border-slate-300  items-center justify-between  last:border-b-0">
      <span className="text-sm text-foreground">{label}</span>

      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={label}
        className="shrink-0"
      />
    </div>
  )
}
