import SecurityBanner from '../components/securityLogin/SecurityBanner'
import ChangePassword from '../components/securityLogin/ChangePassword'
import TwoFactorAuthentication from '../components/securityLogin/TwoFactorAuthentication'
import DangerZone from '../components/securityLogin/DangerZone'
import ProfileHeader from '../components/ProfileHeader'



export default function SecurityLoginPage() {
  return (
    <div
      className="
         space-y-10
        "
    >
      {/* =================================================
            PAGE HEADER
        ================================================= */}

      <ProfileHeader
        title={'Security & Login'}
        description={'Manage your account security and login settings'}
      />

      {/* =================================================
            SECURITY STATUS
        ================================================= */}

      <SecurityBanner />

      {/* =================================================
            CHANGE PASSWORD
        ================================================= */}

      <ChangePassword />

      {/* =================================================
            TWO FACTOR
        ================================================= */}

      <TwoFactorAuthentication />

      {/* =================================================
            DANGER ZONE
        ================================================= */}

      <DangerZone />
    </div>
  )
}
