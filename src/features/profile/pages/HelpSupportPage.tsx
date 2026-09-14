import ContactSupport from '../components/helpSupport/ContactSupport'
import FAQ from '../components/helpSupport/FAQ'
import Report from '../components/helpSupport/Report'
import ProfileHeader from '../components/ProfileHeader'

// =====================================================
// Page
// =====================================================

export default function HelpSupportPage() {
  return (
    <div className="space-y-10">
      {/* =================================================
            Page Header
        ================================================= */}

      <ProfileHeader
        title="Help & Support"
        description=" We're here to help with any questions or issues"
      />
      {/* =================================================
            Contact Support
        ================================================= */}

      <ContactSupport />

      {/* =================================================
            Frequently Asked Questions
        ================================================= */}

      <FAQ />

      {/* =================================================
            Report an Issue
        ================================================= */}

      <Report />
    </div>
  )
}
