import { useEffect, useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

import { Button, Card } from '../../../components'
import OTPImg from '@/assets/images/auth/OTP.png'
import ButtonBack from '../components/ButtonBack'

export default function VerifyPage() {
  const [otp, setOtp] = useState('')
  const [timeLeft, setTimeLeft] = useState(90)

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

  const handleVerify = () => {
    if (otp.length !== 6) return

    console.log('OTP:', otp)

    //  APi
  }

  const handleResend = () => {
    if (timeLeft > 0) return

    setTimeLeft(90)
    setOtp('')

    console.log('Resend OTP')
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <Card className="relative w-full max-w-[900px] min-h-[610px] rounded-[28px] border-0 bg-white shadow-xl overflow-hidden">
        {/* Back button */}
        <div className="hidden lg:block">
          <ButtonBack path={'/forget-password'} />
        </div>

        {/* Content */}
        <div className="flex min-h-[610px] items-center justify-center">
          <div className="w-full max-w-[360px] px-4 lg:px-0 flex flex-col text-center">
            {/* Img OTP */}
            <div className="flex justify-center">
              <img src={OTPImg} alt="OTP Img" />
            </div>

            {/* Title */}
            <h1 className="text-xl font-semibold text-neutral-800">Enter verification code</h1>

            {/* Phone */}
            <p className="mt-1 text-xs text-neutral-500">We Send a code to (+20) 1163982057</p>

            {/* OTP */}
            <div className="mt-4 flex justify-center my-6">
              <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                <InputOTPGroup className="gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className="
                       h-8 w-8
                        lg:h-12 lg:w-12
                        rounded-[4px]
                        border-0
                        bg-neutral-100
                        text-sm
                        font-medium
                        text-neutral-800
                        shadow-none
                        first:rounded-[4px]
                        last:rounded-[4px]
                        focus-within:ring-2
                        focus-within:ring-sky-600
                      "
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

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
              
                text-xs
                font-medium
                transition
                cursor-pointer
                mb-6
                mt-4
                
                ${
                  timeLeft > 0
                    ? 'cursor-not-allowed text-gray-600 font-semibold'
                    : 'text-sky-700 hover:text-sky-900'
                }
              `}
            >
              Resend Code
            </button>

            {/* Verify */}
            <Button type="button" disabled={otp.length !== 6} onClick={handleVerify} size={'xl'}>
              Verify
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
