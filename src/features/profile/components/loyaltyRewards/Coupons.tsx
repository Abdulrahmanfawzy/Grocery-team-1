import { Button, Card, CardContent } from '@/components'
import { Ticket } from 'lucide-react'

export default function Coupons() {
  type Coupon = {
    title: string
    code: string
    description: string
    expires: string
  }

  // =====================================================
  // Data
  // =====================================================

  const coupons: Coupon[] = [
    {
      title: '15% off',
      code: 'SAVE15',
      description: 'Min. order $50',
      expires: 'Expires: Dec 31, 2025',
    },
    {
      title: 'Free Delivery',
      code: 'FREESHIP',
      description: '',
      expires: 'Expires: Dec 15, 2025',
    },
    {
      title: '£10 off Organic',
      code: 'ORGANIC10',
      description: 'Min. order £50',
      expires: 'Expires: Jan 15, 2026',
    },
  ]

  return (
    <Card className="rounded-md border-slate-200 bg-[#f7fbfd] shadow-none">
      <CardContent className="p-5">
        <h2 className="mb-4 text-md font-medium text-slate-700">Your Coupons</h2>

        <div className="space-y-3">
          {coupons.map((coupon) => (
            <div key={coupon.code} className="flex items-center gap-3 rounded-md bg-[#dedcdd] p-3">
              {/* Coupon Icon */}

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
                <Ticket size={20} className=" text-app-main" />
              </div>

              {/* Coupon Information */}

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-800">{coupon.title}</p>

                <p className="text-xs text-slate-700">
                  Code: <span className="font-semibold text-app-main">{coupon.code}</span>
                </p>

                <p className="truncate text-xxs text-slate-400">
                  {coupon.description && `${coupon.description} • `}
                  {coupon.expires}
                </p>
              </div>

              {/* Apply Button */}

              <Button
                size="sm"
                className="h-8 shrink-0 rounded-md bg-app-main  text-sm px-6 hover:bg-[#003e56]"
              >
                Apply
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
