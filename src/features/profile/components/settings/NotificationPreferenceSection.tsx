import { useState } from 'react'

import NotificationRow from './NotificationRow'

type NotificationKey = 'orderUpdates' | 'promotionalEmails' | 'nutritionInsights' | 'priceAlerts'

type Notification = {
  id: NotificationKey
  label: string
  enabled: boolean
}

const notificationItems: Notification[] = [
  {
    id: 'orderUpdates',
    label: 'Order Updates',
    enabled: true,
  },
  {
    id: 'promotionalEmails',
    label: 'Promotional Emails',
    enabled: true,
  },
  {
    id: 'nutritionInsights',
    label: 'Nutrition Insights',
    enabled: true,
  },
  {
    id: 'priceAlerts',
    label: 'Price Alerts',
    enabled: true,
  },
]

export default function NotificationPreferenceSection() {
  const [notifications, setNotifications] = useState(() =>
    notificationItems.reduce<Record<NotificationKey, boolean>>(
      (acc, item) => {
        acc[item.id] = item.enabled
        return acc
      },
      {} as Record<NotificationKey, boolean>,
    ),
  )

  const updateNotification = (key: NotificationKey, value: boolean) => {
    setNotifications((current) => ({
      ...current,
      [key]: value,
    }))
  }

  return (
    <section className="rounded-md border  border-slate-200 bg-card px-4 py-7 font-inter">
      <h2 className="text-md font-semibold text-foreground">Notification Preferences</h2>

      <div className="mt-4 overflow-hidden rounded-md  px-3 bg-[#F7FBFD]">
        {notificationItems.map((item) => (
          <NotificationRow
            key={item.id}
            label={item.label}
            checked={notifications[item.id]}
            onCheckedChange={(value) => updateNotification(item.id, value)}
          />
        ))}
      </div>
    </section>
  )
}
