import { BadgePercent, RefreshCcw, Truck } from 'lucide-react'

const features = [
  { icon: BadgePercent, title: 'Best Prices & Deals', text: "Don't miss our daily amazing deals and prices" },
  { icon: RefreshCcw, title: 'Refundable', text: 'If your items have damage we agree to refund it' },
  { icon: Truck, title: 'Free delivery', text: 'Do purchase over $50 and get free delivery anywhere' },
]

export function TrustFeatures() {
  return (
    <section className="box-container py-10 sm:py-14">
      <div className="grid gap-7 border-b border-slate-100 pb-8 sm:grid-cols-3 sm:gap-10">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center text-app-main">
              <Icon size={36} strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
              <p className="mt-1 max-w-56 text-xs leading-5 text-slate-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
