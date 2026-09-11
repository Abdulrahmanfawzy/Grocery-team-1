import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { Button, Card, Input } from '../../../components'
import ButtonBack from '../components/ButtonBack'

export default function ResetPasswordPage() {
  return (
    <Card
      className="
          relative
          w-full
          max-w-[900px]
          min-h-[610px]
          rounded-[28px]
          border-0
          bg-white
          overflow-hidden
          shadow-xl
        "
    >
      {/* Center */}
      <div className="flex min-h-[610px]  items-center justify-center">
        <div className="w-full max-w-md px-4 md:px-0">
          {/* Back Button */}
          <div className="hidden lg:block">
            <ButtonBack path={'/forget-password'} />
          </div>
          {/* Header */}
          <div className="mb-6 lg:text-center">
            <h1
              className="
                text-2xl  
                lg:text-xl
                  font-semibold
                "
            >
              Reset your password
            </h1>

            <p className="mt-1 text-xs lg:text-base text-neutral-600">
              Please enter your new password
            </p>
          </div>

          {/* New Password */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-neutral-700
                "
            >
              New Password
            </label>

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              Icon={<ShieldCheck size={19} />}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="
                  mb-2
                  block
                  text-sm
                  font-medium
                
                "
            >
              Confirm New Password
            </label>

            <Input
              id="confirmPassword"
              type="password"
              placeholder="Enter your confirmPassword"
              Icon={<CheckCircle2 size={19} />}
            />
          </div>

          {/* Requirements */}
          <div className="mb-8 ">
            <p
              className="
                  mb-2
                  text-sm
                  font-medium
                  text-neutral-700
                "
            >
              Your password must contain:
            </p>

            {/* 6 Characters */}
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 size={14} className={'text-sky-700'} />

              <span className="text-[12px] text-neutral-700">At least 6 characters</span>
            </div>

            {/* Number */}
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className={'text-sky-700'} />

              <span className="text-[12px] text-neutral-700">Contains a number</span>
            </div>
          </div>

          {/* Done */}
          <Button size={'xl'} className={'w-full'}>
            Done
          </Button>
        </div>
      </div>
    </Card>
  )
}
