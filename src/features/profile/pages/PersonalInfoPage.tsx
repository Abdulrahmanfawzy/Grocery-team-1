import ProfilePicture from '../components/profile/ProfilePicture'
import BasicInformation from '../components/profile/BasicInformation'
import NotificationPreferences from '../components/profile/NotificationPreferences'
import LanguageSection from '../components/LanguageSection'
import ProfileHeader from '../components/ProfileHeader'

export default function PersonalInfoPage() {
  return (
    <div className="space-y-10">
      {/* header */}

      <ProfileHeader
        title="Personal Information"
        description="Manage your personal details and preferences"
      />

      {/* Profile */}
      <ProfilePicture />

      {/* Basic information */}
      <BasicInformation />

      {/* Language */}
      <LanguageSection bg="#fff" />

      {/* Notifications */}
      <NotificationPreferences />
    </div>
  )
}
