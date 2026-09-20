import ProfileHeader from '../components/ProfileHeader'
import DataManagementSection from '../components/settings/DataManagementSection'
import useGetSetting from '../hooks/setting/useGetSetting'
import Loader from '../components/Loader'
import { Button, Select } from '@/components'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import { Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'
import NotificationRow from '../components/settings/NotificationRow'
import { useUpdateSetting } from '../hooks/setting/useUpdateSetting'
import type { seting } from '../types/setting.types'

const languages = [
  {
    label: 'English (US)',
    value: 'en',
  },
  {
    label: 'العربية',
    value: 'ar',
  },
  {
    label: 'France',
    value: 'fr',
  },
]

type NotificationKey =
  | 'orderUpdates'
  | 'promotionalEmails'
  | 'nutritionInsights'
  | 'priceAlerts'

type Notification = {
  id: NotificationKey
  label: string
}

const notificationItems: Notification[] = [
  {
    id: 'orderUpdates',
    label: 'Order Updates',
  },
  {
    id: 'promotionalEmails',
    label: 'Promotional Emails',
  },
  {
    id: 'nutritionInsights',
    label: 'Nutrition Insights',
  },
  {
    id: 'priceAlerts',
    label: 'Price Alerts',
  },
]

export default function SettingsPage() {
  const { data, isPending } = useGetSetting()
  const { mutate: updateSetting, isPending: isPendingUpdate } = useUpdateSetting()

  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(false)

  const [notifications, setNotifications] = useState<
    Record<NotificationKey, boolean>
  >({
    orderUpdates: false,
    promotionalEmails: false,
    nutritionInsights: false,
    priceAlerts: false,
  })

  // API → UI
  useEffect(() => {
    if (!data) return

    setLanguage(data.data.language)

    setDarkMode(data.data.mode === 'dark')

    setNotifications({
      orderUpdates: Boolean(data.data.order_updated),
      promotionalEmails: Boolean(data.data.promotional_email),
      nutritionInsights: Boolean(data.data.nutrition_insights),
      priceAlerts: Boolean(data.data.price_alerts),
    })
  }, [data])

  const updateNotification = (
    key: NotificationKey,
    value: boolean,
  ) => {
    setNotifications((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const handleSave = () => {
    const formData: seting = {
      id: data?.data.id!,
      language,
      mode: darkMode ? 'dark' : 'light',
      order_updated: notifications.orderUpdates ? 1 : 0,
      promotional_email: notifications.promotionalEmails ? 1 : 0,
      nutrition_insights: notifications.nutritionInsights ? 1 : 0,
      price_alerts: notifications.priceAlerts ? 1 : 0,
    }
    // UI → API
    updateSetting(formData)
  }


  if (isPending) return <Loader />

  return (
    <div className="space-y-10">
      <ProfileHeader
        title="Settings"
        description="Manage app preferences and privacy settings"
      />

      {/* Language */}
      <section className="rounded-md border border-slate-200 bg-[#F7FBFD] p-4 font-inter">
        <h2 className="text-md font-semibold text-foreground">
          Language
        </h2>

        <div className="mt-3">
          <p className="mb-1.5 text-xs font-medium text-muted-foreground">
            Preferred Language
          </p>

          <Select
            value={language}
            onValueChange={setLanguage}
          >
            <SelectTrigger
              className="
                h-10!
                w-40
                rounded-md
                border-slate-200
                bg-white
                text-sm
                text-slate-700
                shadow-none
                focus:ring-1
                focus:ring-app-main/20
              "
            >
              <SelectValue placeholder="Select language" />
            </SelectTrigger>

            <SelectContent>
              {languages.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  className="text-sm"
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Dark Mode */}
      <section className="rounded-md border border-gray-200 bg-[#F7FBFD] p-4 py-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-1.5">
            <Sun
              className="mt-1 text-foreground"
              size={18}
            />

            <div>
              <h2 className="text-md font-medium text-foreground">
                Dark Mode
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                Switch between light and dark theme
              </p>
            </div>
          </div>

          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
            aria-label="Toggle dark mode"
          />
        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-md border border-slate-200 bg-card px-4 py-7 font-inter">
        <h2 className="text-md font-semibold text-foreground">
          Notification Preferences
        </h2>

        <div className="mt-4 overflow-hidden rounded-md bg-[#F7FBFD] px-3">
          {notificationItems.map((item) => (
            <NotificationRow
              key={item.id}
              label={item.label}
              checked={notifications[item.id]}
              onCheckedChange={(value) =>
                updateNotification(item.id, value)
              }
            />
          ))}
        </div>
      </section>

      {/* Save Changes button */}
      <div className="flex items-end justify-end">
        <Button
          size="lg"
          className=" px-16!"
          onClick={handleSave}
          disabled={isPendingUpdate}
          isLoading={isPendingUpdate}
        >
          Save Changes
        </Button>
      </div>


      {/* Actions delete and download */}
      <DataManagementSection />
    </div>
  )
}