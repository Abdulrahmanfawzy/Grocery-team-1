import ContactSupport from '../components/helpSupport/ContactSupport'
import FAQ from '../components/helpSupport/FAQ'
import Report from '../components/helpSupport/Report'
import Loader from '../components/Loader'
import ProfileHeader from '../components/ProfileHeader'
import { useGetFqa } from '../hooks/Fqa/useGetFqa'

// =====================================================
// Page
// =====================================================

export default function HelpSupportPage() {
  const { data, isLoading } = useGetFqa()

  if (isLoading) return <Loader />

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

      <FAQ data={data?.data || []} />

      {/* =================================================
            Report an Issue
        ================================================= */}

      <Report />
    </div>
  )
}
