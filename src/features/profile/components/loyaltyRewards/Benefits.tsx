import { Card, CardContent } from '@/components'
import { Gift, Headphones, Percent, Sparkles } from 'lucide-react'
import React from 'react'

export default function Benefits() {
  type Benefit = {
    title: string
    description: string
    icon: React.ReactNode
  }

  // =====================================================
  // Data
  // =====================================================

  const benefits: Benefit[] = [
    {
      title: '2x Points',
      description: 'Earn double points on all purchases',
      icon: <Sparkles size={20} />,
    },
    {
      title: 'Birthday Bonus',
      description: '500 bonus points on your birthday',
      icon: <Gift size={20} />,
    },
    {
      title: 'Exclusive Deals',
      description: 'Access to member-only promotions',
      icon: <Percent size={20} />,
    },
    {
      title: 'Priority Support',
      description: 'Faster customer service response',
      icon: <Headphones size={20} />,
    },
  ]
  return (
    <Card className="rounded-md border-slate-300 bg-[#f7fbfd] shadow-none">
      <CardContent className="p-5">
        <h2 className="mb-4 text-md font-medium text-slate-700">Your Gold Benefits</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex py-6 items-start gap-3 rounded-md bg-[#dedcdd] px-3"
            >
              <div className="mt-0.5 shrink-0 text-app-main">{benefit.icon}</div>

              <div>
                <h3 className="text-sm font-medium text-app-main">{benefit.title}</h3>

                <p className="mt-1 text-xxs leading-4 text-slate-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
