import { Package, Award, CreditCard } from 'lucide-react'
import WelcomeStat from './WelcomeStat'

export default function DashboardWelcome({
  loyaltyPoints,
  trackOrder,
}: {
  loyaltyPoints: number
  trackOrder: number
}) {
  return (
    <section className="rounded-lg bg-app-main p-5 text-white">
      <h1 className="text-sm font-semibold">Welcome back, Sarah!</h1>

      <p className="mt-1 text-xs text-white/70">
        Here's what's happening with your grocery shopping
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <WelcomeStat icon={<Package size={25} />} title="Track Orders" value={trackOrder} />

        <WelcomeStat icon={<Award size={25} />} title="Loyalty Points" value={loyaltyPoints} />

        <WelcomeStat icon={<CreditCard size={25} />} title="Store Credit" value={12.5} />
      </div>
    </section>
  )
}
