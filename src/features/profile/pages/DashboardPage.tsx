import DashboardWelcome from '../components/dashboard/DashboardWelcome'
import CurrentCart from '../components/dashboard/CurrentCart'
import UpcomingDelivery from '../components/dashboard/UpcomingDelivery'
import ShoppingInsights from '../components/dashboard/ShoppingInsights'
import TopPurchases from '../components/dashboard/TopPurchases'
import RecentOrders from '../components/dashboard/RecentOrders'
import { useDashboard } from '../hooks/userDashboard/useDashboard'
import Loader from '../components/Loader'

export default function DashboardPage() {
  const { data, isLoading } = useDashboard()


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="space-y-5">
      {/* Welcome */}
      <DashboardWelcome
        trackOrder={data?.data.track_order ?? 3}
        loyaltyPoints={data?.data?.loyalty_points.points || 10}
      />

      {/* Cart & Delivery */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <CurrentCart last_order={data?.data?.last_order || []} />
        <UpcomingDelivery />
      </div>

      {/* Shopping Insights */}
      <ShoppingInsights />

      {/* Recent Orders & Top Purchases */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <RecentOrders recent_orders={data?.data?.recent_orders || {}} />

        <TopPurchases top_purchases={data?.data?.top_purchases || {}} />
      </div>
    </div>
  )
}
