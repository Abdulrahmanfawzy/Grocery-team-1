import { Button } from '@/components'
import { Info } from 'lucide-react'

export default function DangerZone() {
  const handleDeleteAccount = () => {
    const confirmed = window.confirm('Are you sure you want to delete your account?')

    if (!confirmed) return

    console.log('Delete account')
  }

  return (
    <section
      className="
        relative
        rounded-md
        bg-[#f8e7e7]
        p-7
      "
    >
      <div className="flex items-start gap-2">
        <Info size={20} className="mt-0.5  text-red-500" />

        <div>
          <h2 className="text-md font-medium text-red-600">Danger Zone</h2>

          <p className="mt-2 text-xxs leading-4 text-red-500">
            Once you delete your account, there is no going back. Please be certain.
          </p>

          <Button
            type="button"
            variant={'destructive'}
            onClick={handleDeleteAccount}
            className="
              mt-5
              rounded-md
              bg-red-700
              px-7
              font-medium
              text-white
              shadow-none
              hover:bg-red-800
            "
            size={'lg'}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </section>
  )
}
