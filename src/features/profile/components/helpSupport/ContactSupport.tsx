import { Card, CardContent } from '@/components'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import React from 'react'

export default function ContactSupport() {
  type SupportMethod = {
    title: string
    description: string
    availability: string
    icon: React.ReactNode
  }

  const supportMethods: SupportMethod[] = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available now',
      icon: <MessageCircle size={20} />,
    },
    {
      title: 'Call Us',
      description: '01 2259 4837',
      availability: 'Mon-Sat 9AM-8PM',
      icon: <Phone size={20} />,
    },
    {
      title: 'Email',
      description: 'help@groceryplus.com',
      availability: '24-48 hour response',
      icon: <Mail size={20} />,
    },
  ]
  return (
    <Card className="overflow-hidden py-6 rounded-md border-0 bg-app-main shadow-none">
      <CardContent className="p-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {supportMethods.map((method) => (
            <button
              key={method.title}
              type="button"
              className="group flex min-h-[100px] flex-col rounded-md bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Icon */}

              <div className="mb-2 text-app-main">{method.icon}</div>

              {/* Title */}

              <h2 className="text-md font-medium text-slate-800">{method.title}</h2>

              {/* Description */}

              <p className="mt-1 truncate text-xs text-slate-500">{method.description}</p>

              {/* Availability */}

              <p
                className={`mt-auto pt-2 text-xs ${
                  method.title === 'Live Chat' ? 'text-green-600' : 'text-slate-400'
                }`}
              >
                {method.availability}
              </p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
