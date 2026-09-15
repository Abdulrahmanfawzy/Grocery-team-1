import { type ElementType } from 'react'
import { Crown, X } from 'lucide-react'

import {
  LayoutDashboard,
  UserRound,
  CreditCard,
  Clock3,
  Heart,
  MapPin,
  ShieldCheck,
  Gift,
  CircleHelp,
  Settings,
} from 'lucide-react'

import avatar from '@/assets/images/profile/avatar.png'
import { cn } from '@/lib/utils'
import SidebarItem from './SidebarItem'

type ProfileSidebarProps = {
  open: boolean
  onClose: () => void
}

type SidebarLink = {
  to: string
  title: string
  icon: ElementType
  end?: boolean
}

const sidebarLinks: SidebarLink[] = [
  {
    to: '/profile',
    title: 'Dashboard',
    icon: LayoutDashboard,
    end: true,
  },
  {
    to: '/profile/personal-info',
    title: 'Personal Info',
    icon: UserRound,
  },
  {
    to: '/profile/payment-wallet',
    title: 'Payment & Wallet',
    icon: CreditCard,
  },
  {
    to: '/profile/order-history',
    title: 'Order History',
    icon: Clock3,
  },
  {
    to: '/profile/smart-lists',
    title: 'Smart Lists',
    icon: Heart,
  },
  {
    to: '/profile/addresses',
    title: 'Addresses',
    icon: MapPin,
  },
  {
    to: '/profile/security-login',
    title: 'Security & Login',
    icon: ShieldCheck,
  },
  {
    to: '/profile/loyalty-rewards',
    title: 'Loyalty & Rewards',
    icon: Gift,
  },
  {
    to: '/profile/help-support',
    title: 'Help & Support',
    icon: CircleHelp,
  },
  {
    to: '/profile/settings',
    title: 'Settings',
    icon: Settings,
  },
]

export default function ProfileSidebar({ open, onClose }: ProfileSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="
            fixed inset-0 z-40
            bg-black/30
            backdrop-blur-[1px]
            lg:hidden
          "
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          `
            fixed top-0 left-0 z-50
            h-full w-72.5 max-w-[85vw]
            overflow-y-auto
            rounded-r-xl
            border-r border-gray-200
            bg-white
            shadow-2xl
            transition-transform duration-300 ease-out

            lg:sticky lg:top-20
            lg:z-auto
            lg:h-130
            lg:w-auto
            lg:max-w-none
            lg:rounded-lg
            lg:border
            lg:shadow-none
            lg:translate-x-0
          `,
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 lg:hidden">
          <span className="text-sm font-semibold text-app-main">Profile Menu</span>

          <button
            type="button"
            onClick={onClose}
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              text-gray-500
              transition
              hover:bg-gray-100
              hover:text-app-main
            "
            aria-label="Close profile menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* User */}
        <header className="flex items-center gap-3 border-b border-gray-100 p-5">
          <span className="relative shrink-0">
            <img src={avatar} alt="Sarah" className="h-12 w-12 rounded-full object-cover" />

            <span
              className="
                absolute right-0 bottom-0
                flex h-5 w-5 items-center justify-center
                rounded-full
                bg-white
                shadow-sm
              "
            >
              <Crown size={13} className="text-gold" />
            </span>
          </span>

          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-app-main">Sarah</span>

            <span className="text-xs text-app-main">Gold Member</span>
          </div>
        </header>

        {/* Navigation */}
        <nav className="p-2">
          {sidebarLinks.map(({ to, title, icon: Icon, end }) => (
            <SidebarItem
              key={to}
              to={to}
              title={title}
              icon={<Icon size={15} />}
              end={end}
              onClick={onClose}
            />
          ))}
        </nav>
      </aside>
    </>
  )
}
