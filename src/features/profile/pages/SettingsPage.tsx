import ProfileHeader from '../components/ProfileHeader'
import AppearanceSection from '../components/settings/AppearanceSection'
import NotificationPreferenceSection from '../components/settings/NotificationPreferenceSection'
import DataManagementSection from '../components/settings/DataManagementSection'
import LanguageSection from '../components/LanguageSection'

export default function SettingsPage() {
  return (
    <div className="space-y-10">
      <ProfileHeader title="Settings" description="Manage app preferences and privacy settings" />

      <LanguageSection bg="#F7FBFD" />

      <AppearanceSection />

      <NotificationPreferenceSection />

      <DataManagementSection />
    </div>
  )
}
