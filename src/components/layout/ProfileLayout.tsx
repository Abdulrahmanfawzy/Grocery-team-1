import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Outlet, useLocation } from 'react-router-dom'

import ProfileSidebar from '@/features/profile/components/ProfileSidebar'

const profileLinks = [
  { path: '/profile', title: 'Dashboard' },
  { path: '/profile/personal-info', title: 'Personal Info' },
  { path: '/profile/payment-wallet', title: 'Payment & Wallet' },
  { path: '/profile/order-history', title: 'Order History' },
  { path: '/profile/smart-lists', title: 'Smart Lists' },
  { path: '/profile/addresses', title: 'Addresses' },
  { path: '/profile/security-login', title: 'Security & Login' },
  { path: '/profile/loyalty-rewards', title: 'Loyalty & Rewards' },
  { path: '/profile/help-support', title: 'Help & Support' },
  { path: '/profile/settings', title: 'Settings' },
]

export default function ProfileLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  const currentPage = profileLinks.find((item) => item.path === pathname)?.title ?? 'Profile'

  useEffect(() => {
    if (!sidebarOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <div className="profile-layout py-6">
      <div className="box-container">
        {/* Mobile Profile Menu */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="
            mb-4
            flex w-full items-center justify-between
            rounded-lg
            border border-gray-200
            bg-white
            px-4 py-3
            text-sm font-medium text-slate-700
            shadow-sm
            transition
            hover:border-app-main/20
            hover:text-app-main
            hover:shadow
            active:scale-[0.99]
            lg:hidden
          "
          aria-label="Open profile navigation"
        >
          <span className="flex items-center gap-2">
            <Menu size={18} strokeWidth={2} />
            <span>{currentPage}</span>
          </span>

          <span className="text-xs text-slate-400">Profile Menu</span>
        </button>

        {/* Profile Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {/* Sidebar */}
          <ProfileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Main Content */}
          <main className="col-span-1 lg:col-span-3">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
