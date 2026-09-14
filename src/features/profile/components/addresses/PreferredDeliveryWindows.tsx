import { Clock3 } from 'lucide-react'
import { useState } from 'react'
import DeliveryWindowItem from './DeliveryWindowItem'

type DeliveryWindow = {
  id: string
  name: string
  time: string
}

/* =========================================================
   DATA
========================================================= */

const deliveryWindows: DeliveryWindow[] = [
  {
    id: 'morning',
    name: 'Morning',
    time: '8:00 AM - 12:00 PM',
  },

  {
    id: 'afternoon',
    name: 'Afternoon',
    time: '12:00 PM - 5:00 PM',
  },

  {
    id: 'evening',
    name: 'Evening',
    time: '5:00 PM - 8:00 PM',
  },
]
export default function PreferredDeliveryWindows() {
  const [selectedWindow, setSelectedWindow] = useState('morning')

  return (
    <section
      className="
        rounded-lg
        border
        border-slate-200
        bg-white
        p-4
      
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex items-center gap-2">
        <Clock3 size={19} className=" text-app-main" />

        <h2 className="text-md font-medium text-slate-800">Preferred Delivery Windows</h2>
      </div>

      <p className="ml-6 mt-2 text-xs text-slate-400">
        Select your preferred time slots for deliveries
      </p>

      {/* =================================================
          WINDOWS
      ================================================= */}

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-2
          sm:grid-cols-3
        "
      >
        {deliveryWindows.map((window) => (
          <DeliveryWindowItem
            key={window.id}
            window={window}
            selected={selectedWindow === window.id}
            onSelect={() => setSelectedWindow(window.id)}
          />
        ))}
      </div>
    </section>
  )
}
