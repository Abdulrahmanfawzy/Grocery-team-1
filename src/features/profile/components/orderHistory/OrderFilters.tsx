import { useState } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'

const statusOptions = [
  { label: 'All Status', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Pending', value: 'pending' },
  { label: 'Cancelled', value: 'cancelled' },
]

const dateOptions = [
  { label: 'Last 7 Days', value: '7' },
  { label: 'Last 30 Days', value: '30' },
  { label: 'Last 90 Days', value: '90' },
  { label: 'This Year', value: '365' },
]

export default function OrderFilters() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [dateRange, setDateRange] = useState('30')

  return (
    <div className="grid md:grid-cols-3 gap-6 ">
      {/* Search */}
      <div>
        <Input
          Icon={<Search size={18} />}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search orders..."
          className="h-11"
        />
      </div>

      {/* Status */}
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger
          className="
            h-11!
            w-full
           
          "
        >
          <SelectValue placeholder="All Status" />
        </SelectTrigger>

        <SelectContent className="font-inter">
          {statusOptions.map((option) => (
            <SelectItem key={option.value} value={option.value} className="text-sm">
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Date */}
      <Select value={dateRange} onValueChange={setDateRange}>
        <SelectTrigger
          className="
            h-11!
            w-full
          
          "
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {dateOptions.map((option) => (
            <SelectItem key={option.value} value={option.value} className="text-sm">
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
