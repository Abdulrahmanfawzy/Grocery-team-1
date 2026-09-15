import { BriefcaseBusiness, Home } from 'lucide-react'
type AddressType = 'Home' | 'Work'

export default function AddressIcon({ type }: { type: AddressType }) {
  if (type === 'Work') {
    return <BriefcaseBusiness  size={19}  className=" text-app-main" />
  }

  return <Home size={19}  className=" text-app-main" />
}
