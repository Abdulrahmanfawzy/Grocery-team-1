import { Button } from '@/components'
import { Switch } from '@/components/ui/switch'
import { CircleCheck, Smartphone } from 'lucide-react'
import { useState } from 'react'

export default function TwoFactorAuthentication() {
  const [enabled, setEnabled] = useState(true)

  const [phoneNumber, setPhoneNumber] = useState('+20109 874 5531')

  return (
    <section
      className="
        rounded-lg
        border
        border-slate-200
        bg-[#f5fafc]
        p-7
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-2">
          <Smartphone size={20} className="mt-0.5  text-app-main" />

          <div>
            <h2 className="text-md font-medium text-slate-800">Two - Factor Authentication</h2>

            <p className="mt-1 text-xxs leading-4 text-slate-400">
              Add an extra layer of security by requiring a verification code in addition to your
              password
            </p>
          </div>
        </div>

        {/* =================================================
            SHADCN SWITCH
        ================================================= */}

        <Switch
          checked={enabled}
          onCheckedChange={setEnabled}
          aria-label="Enable two-factor authentication"
        />
      </div>

      {/* =================================================
          ENABLED MESSAGE
      ================================================= */}

      {enabled && (
        <div
          className="
            relative
            mt-3
            rounded-md
            bg-[#e2e0e0]
            px-3
            py-2.5
          "
        >
          {/* Corner */}

          <div
            className="
              absolute
              bottom-0
              right-0
              h-0
              w-0
              border-b-14
              border-l-14
              border-b-white
              border-l-transparent
            "
          />

          <div className="flex items-start gap-2">
            <CircleCheck size={18} className="mt-0.5 text-app-main" />

            <div>
              <p className="text-md font-medium text-app-main">Enabled</p>

              <p className="mt-1 text-[12px] text-app-main">SMS verification to {phoneNumber}</p>
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          CHANGE PHONE
      ================================================= */}

      <Button
        type="button"
        onClick={() => setPhoneNumber('+20109 874 5531')}
        className="
        mt-6
        "
        size={'lg'}
      >
        Change Phone Number
      </Button>
    </section>
  )
}
