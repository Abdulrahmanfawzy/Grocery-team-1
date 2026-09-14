import DashboardWelcome from '../components/dashboard/DashboardWelcome'
import CurrentCart from '../components/dashboard/CurrentCart'
import UpcomingDelivery from '../components/dashboard/UpcomingDelivery'
import ShoppingInsights from '../components/dashboard/ShoppingInsights'
import TopPurchases from '../components/dashboard/TopPurchases'
import RecentOrders from '../components/dashboard/RecentOrders'

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      {/* Welcome */}
      <DashboardWelcome />

      {/* Cart & Delivery */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <CurrentCart />
        <UpcomingDelivery />
      </div>

      {/* Shopping Insights */}
      <ShoppingInsights />

      {/* Recent Orders & Top Purchases */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <RecentOrders />
        <TopPurchases />
      </div>
    </div>
  )
}
