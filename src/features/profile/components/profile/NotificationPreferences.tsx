import { useState } from 'react'

import NotificationGroup from './NotificationGroup'

type NotificationItem = {
  id: string
  label: string
  enabled: boolean
}

export type NotificationGroupData = {
  id: string
  title: string
  items: NotificationItem[]
}

const notificationGroups: NotificationGroupData[] = [
  {
    id: 'orders',
    title: 'Order & Delivery Updates',
    items: [
      {
        id: 'order-confirmation',
        label: 'Order Confirmation',
        enabled: false,
      },
      {
        id: 'order-shipped',
        label: 'Order Shipped',
        enabled: true,
      },
      {
        id: 'delivery-updates',
        label: 'Delivery Updates',
        enabled: false,
      },
      {
        id: 'out-of-stock',
        label: 'Out-of-Stock Alerts',
        enabled: true,
      },
    ],
  },

  {
    id: 'account',
    title: 'Account & Reminders',
    items: [
      {
        id: 'cart-reminders',
        label: 'Cart Reminders',
        enabled: false,
      },
      {
        id: 'payment',
        label: 'Payment & Billing Notifications',
        enabled: true,
      },
      {
        id: 'security',
        label: 'Account Security Alerts',
        enabled: false,
      },
    ],
  },

  {
    id: 'communication',
    title: 'Communication Channels',
    items: [
      {
        id: 'email',
        label: 'Email Notifications',
        enabled: false,
      },
      {
        id: 'sms',
        label: 'SMS Notifications',
        enabled: true,
      },
      {
        id: 'push',
        label: 'Push Notifications',
        enabled: false,
      },
    ],
  },
]

const getInitialValues = () => {
  return notificationGroups.reduce<Record<string, boolean>>((acc, group) => {
    group.items.forEach((item) => {
      acc[item.id] = item.enabled
    })

    return acc
  }, {})
}

export default function NotificationPreferences() {
  const [notificationValues, setNotificationValues] =
    useState<Record<string, boolean>>(getInitialValues)

  const handleToggle = (id: string, value: boolean) => {
    setNotificationValues((current) => ({
      ...current,
      [id]: value,
    }))
  }

  return (
    <section className="rounded-md border border-slate-200 bg-white p-4 font-inter">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-sm font-semibold text-slate-900">Notification Preferences</h2>

        <p className="mt-1 text-xs text-slate-400">
          Manage your notifications based on your preferences
        </p>
      </div>

      {/* Notification groups */}
      <div className="space-y-10">
        {notificationGroups.map((group) => (
          <NotificationGroup
            key={group.id}
            group={group}
            values={notificationValues}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  )
}
