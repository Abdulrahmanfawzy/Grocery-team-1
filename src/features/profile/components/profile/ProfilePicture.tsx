import { Button } from '@/components/ui/Button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Camera } from 'lucide-react'
import avatar from '../../../../assets/images/profile/avatar.png'
export default function ProfilePicture() {
  return (
    <section className="space-y-2">
      <h2 className="text-md font-medium ">Profile Picture</h2>

      <div className="flex items-center gap-5">
        {/* Avatar */}
        <Avatar className="h-20 w-20 border border-slate-100">
          <AvatarImage src={avatar} alt="Profile" className="object-cover" />

          <AvatarFallback className="bg-slate-100 text-xs text-slate-500">SA</AvatarFallback>
        </Avatar>

        {/* Upload */}
        <div className="flex flex-col">
          <Button size={'lg'}>
            <Camera size={20} />
            Upload New Photo
          </Button>

          <span className="mt-3 text-xs text-gray-400">JPG, PNG or GIF. Max size 5MB</span>
        </div>
      </div>
    </section>
  )
}
