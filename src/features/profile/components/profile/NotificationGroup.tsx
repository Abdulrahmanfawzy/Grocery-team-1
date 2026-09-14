import { Switch } from '@/components/ui/switch'
import type { NotificationGroupData } from './NotificationPreferences'

type NotificationGroupProps = {
  group: NotificationGroupData
  values: Record<string, boolean>
  onToggle: (id: string, value: boolean) => void
}

export default function NotificationGroup({ group, values, onToggle }: NotificationGroupProps) {
  return (
    <div>
      {/* Group title */}
      <h3 className="mb-2 text-sm font-semibold text-slate-900">{group.title}</h3>

      {/* Items */}
      <div className="overflow-hidden rounded-md bg-[#f5fafc]">
        {group.items.map((item, index) => {
          const checked = values[item.id]

          return (
            <div
              key={item.id}
              className={[
                'flex items-center justify-between gap-4  px-3 py-4',
                index !== group.items.length - 1 ? 'border-b border- border-gray-300' : '',
              ].join(' ')}
            >
              <span className="text-sm leading-5 text-slate-700">{item.label}</span>

              <Switch
                checked={checked}
                onCheckedChange={(value) => onToggle(item.id, value)}
                className="shrink-0 data-[state=checked]:bg-app-main"
                aria-label={item.label}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
