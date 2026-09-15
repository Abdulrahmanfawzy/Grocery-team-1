import { ShieldCheck } from 'lucide-react'

/* =========================================================
   DATA
========================================================= */

type SecurityInfo = {
  id: string
  text: string
}

const securityInfo: SecurityInfo[] = [
  {
    id: 'secure',
    text: 'Your Account Is Secure',
  },
  {
    id: 'features',
    text: 'All security features are enabled',
  },
]
export default function SecurityBanner() {
  return (
    <div
      className="
        relative
        bg-[#e4e2e2]
        px-5
        py-7
      "
    >
      {/* Corner */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-0
          w-0
          border-b-18
          border-l-18
          border-b-white
          border-l-transparent
        "
      />

      <div className="flex items-start gap-2">
        <ShieldCheck size={20} className="mt-0.5   text-app-main" />

        <div>
          <p className="text-md font-medium text-app-main">{securityInfo[0]?.text}</p>

          <p className="mt-1 text-xs text-app-main">{securityInfo[1]?.text}</p>
        </div>
      </div>
    </div>
  )
}
