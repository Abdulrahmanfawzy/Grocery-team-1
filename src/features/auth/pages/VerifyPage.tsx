import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

import { Button, Card } from '../../../components'
import OTPImg from '@/assets/images/auth/OTP.png'
import ButtonBack from '../components/ButtonBack'
import { verifySchema, type VerifyFormValues } from '../schemas/auth.schema'

export default function VerifyPage() {
  const [timeLeft, setTimeLeft] = useState(90)

  const form = useForm<VerifyFormValues>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      otp: '',
    },
  })

  const onSubmit = (data: VerifyFormValues) => {
    console.log('OTP:', data.otp)

    // API
  }

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60

    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleResend = () => {
    if (timeLeft > 0) return

    form.reset({
      otp: '',
    })

    setTimeLeft(90)

    console.log('Resend OTP')

    // API
  }

  return (
    <Card className="relative  w-full min-h-152.5  max-w-225! overflow-hidden rounded-[28px] border-0 bg-white shadow-xl">
      {/* Back button */}
      <div className="hidden lg:block">
        <ButtonBack path="/forget-password" />
      </div>

      {/* Content */}
      <div className="flex min-h-152.5 items-center justify-center">
        <div className="flex w-full max-w-90 flex-col px-4 text-center lg:px-0">
          {/* Img OTP */}
          <div className="flex justify-center">
            <img src={OTPImg} alt="OTP verification" />
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold text-neutral-800">Enter verification code</h1>

          {/* Phone */}
          <p className="mt-1 text-xs text-neutral-500">We sent a code to (+20) 1163982057</p>

          {/* Form */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* OTP */}
            <Controller
              name="otp"
              control={form.control}
              render={({ field, fieldState }) => (
                <div>
                  <div className="my-6 mt-4 flex justify-center">
                    <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
                      <InputOTPGroup className="gap-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <InputOTPSlot
                            key={index}
                            index={index}
                            className="
                              h-8
                              w-8
                              rounded-lg!
                              border-0
                              bg-neutral-100
                              text-sm
                              font-medium
                              text-neutral-800
                              shadow-none
                              first:rounded-lg!
                              last:rounded-lg!
                              focus-within:ring-2
                              focus-within:ring-sky-600
                              lg:h-12
                              lg:w-12
                            "
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  {fieldState.error && (
                    <p className="mb-3 text-xs text-destructive">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            {/* Timer */}
            <div className="mt-3 text-[11px] text-neutral-400">
              Having trouble? Request a new OTP in{' '}
              <span className="font-medium text-neutral-500">{formatTime(timeLeft)}</span>
            </div>

            {/* Resend */}
            <button
              type="button"
              disabled={timeLeft > 0}
              onClick={handleResend}
              className={`
                mb-6 mt-4
                cursor-pointer
                text-xs
                font-medium
                transition

                ${
                  timeLeft > 0
                    ? 'cursor-not-allowed font-semibold text-gray-600'
                    : 'text-sky-700 hover:text-sky-900'
                }
              `}
            >
              Resend Code
            </button>

            {/* Verify */}
            <Button type="submit" size="xl" className="w-full" disabled={!form.formState.isValid}>
              Verify
            </Button>
          </form>
        </div>
      </div>
    </Card>
  )
}
