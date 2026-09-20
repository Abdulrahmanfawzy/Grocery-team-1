import { useState } from 'react'
import { Pencil, User, Mail, Phone } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

type ProfileField = {
  id: string
  label: string
  value: string
  icon: React.ReactNode
}

const initialProfileFields: ProfileField[] = [
  {
    id: 'firstName',
    label: 'First Name',
    value: 'Sarah',
    icon: <User size={18} />,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    value: 'Emad',
    icon: <User size={18} />,
  },
  {
    id: 'email',
    label: 'Email Address',
    value: 'sarah@gmail.com',
    icon: <Mail size={18} />,
  },
  {
    id: 'phone',
    label: 'Phone Number',
    value: '+20 112 345 9876',
    icon: <Phone size={18} />,
  },
]

export default function BasicInformation() {
  const [isEditing, setIsEditing] = useState(false)

  const [fields, setFields] = useState(initialProfileFields)

  const handleChange = (id: string, value: string) => {
    setFields((currentFields) =>
      currentFields.map((field) =>
        field.id === id
          ? {
            ...field,
            value,
          }
          : field,
      ),
    )
  }

  return (
    <section className="overflow-hidden rounded-md border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5">
        <h2 className="text-md font-medium">Basic Information</h2>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => setIsEditing((value) => !value)}
        >
          <Pencil className="mr-1 h-2.5 w-2.5" />

          {isEditing ? 'Done' : 'Edit'}
        </Button>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 p-3 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className="space-y-1">
            <label htmlFor={field.id} className="block text-xs font-medium text-slate-700">
              {field.label}
            </label>

            <Input
              id={field.id}
              Icon={field.icon}
              value={field.value}
              disabled={!isEditing}
              onChange={(event) => handleChange(field.id, event.target.value)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
