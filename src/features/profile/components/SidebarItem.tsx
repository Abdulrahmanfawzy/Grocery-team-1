import { cn } from 'cn'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
type SidebarItemProps = {
  to: string
  icon: ReactNode
  title: string
  end?: boolean
  onClick: () => void
}

export default function SidebarItem({ to, icon, title, end = false, onClick }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-xs transition',

          isActive
            ? 'bg-app-main text-white'
            : 'text-gray-600 hover:bg-gray-50 hover:text-app-main',
        )
      }
    >
      {icon}

      <span>{title}</span>
    </NavLink>
  )
}
