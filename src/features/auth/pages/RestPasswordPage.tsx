import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, ShieldCheck } from 'lucide-react'

import { Button, Card } from '../../../components'

import ButtonBack from '../components/ButtonBack'
import { resetPasswordSchema, type ResetPasswordFormValues } from '../schemas/auth.schema'
import PasswordInput from '../components/PasswordInput'

export default function ResetPasswordPage() {
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: ResetPasswordFormValues) => {
    console.log(data)
  }

  return (
    <Card
      className="
        relative
        w-full
        max-w-225!
        min-h-152.5
        overflow-hidden
        rounded-[28px]
        border-0
        bg-white
        shadow-xl
      "
    >
      <div className="flex min-h-152.5 items-center justify-center">
        <div className="w-full max-w-md px-4 md:px-0">
          {/* Back Button */}
          <div className="hidden lg:block">
            <ButtonBack path="/forget-password" />
          </div>

          {/* Header */}
          <div className="mb-6 lg:text-center">
            <h1
              className="
                text-2xl
                font-semibold
                lg:text-xl
              "
            >
              Reset your password
            </h1>

            <p className="mt-1 text-xs text-neutral-600 lg:text-base">
              Please enter your new password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            {/* New Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="mb-5">
                  <label
                    htmlFor="confirmPassword"
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
                  <PasswordInput
                    {...field}
                    id="password"
                    placeholder="Enter your password"
                    Icon={<ShieldCheck size={19} />}
                  />

                  {fieldState.error && (
                    <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            {/* Confirm Password */}
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <div className="mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-neutral-700
                    "
                  >
                    Confirm New Password
                  </label>
                  <PasswordInput
                    {...field}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    Icon={<CheckCircle2 size={19} />}
                  />

                  {fieldState.error && (
                    <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            {/* Requirements */}
            <div className="mb-8">
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

              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-700" />

                <span className="text-xs text-neutral-700">At least 6 characters</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-700" />

                <span className="text-xs text-neutral-700">Contains a number</span>
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" size="xl" className="w-full">
              Done
            </Button>
          </form>
        </div>
      </div>
    </Card>
  )
}
