import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useNavigate } from 'react-router-dom'

interface SignupSuccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  redirect: string
  time: number
}

export default function ModelAuth({ open, onOpenChange, redirect, time }: SignupSuccessModalProps) {
  const [seconds, setSeconds] = useState(time)
  const navigate = useNavigate()
  useEffect(() => {
    if (!open) {
      setSeconds(time)
      return
    }

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate(redirect)
          onOpenChange(false)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [open, redirect, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-105.5
          max-w-[calc(100vw-32px)]
          min-h-109
          rounded-[32px]
          border-0
          bg-white
          p-0
          shadow-2xl
        "
      >
        <div className="flex min-h-109 flex-col items-center justify-center px-8">
          {/* Success Icon */}
          <div
            className="
              relative
              mb-7
              flex
              h-136.5
              w-136.5
              items-center
              justify-center
              bg-[#064f6b]
            "
            style={{
              clipPath:
                'polygon(50% 0%, 61% 8%, 74% 5%, 82% 15%, 95% 19%, 94% 32%, 100% 44%, 93% 56%, 96% 69%, 84% 76%, 81% 89%, 68% 91%, 58% 100%, 47% 93%, 34% 97%, 27% 87%, 14% 84%, 15% 71%, 5% 62%, 9% 49%, 0% 38%, 9% 28%, 7% 15%, 20% 12%, 29% 3%, 41% 7%)',
            }}
          >
            <Check size={82} strokeWidth={3.5} className="text-white" />
          </div>

          {/* Title */}
          <DialogTitle
            className="
              text-center
              text-[22px]
              font-semibold
              leading-7
              text-neutral-950
            "
          >
            Welcome to Grocery +
          </DialogTitle>

          {/* Description */}
          <DialogDescription
            className="
              mt-2
              max-w-72.5
              text-center
              text-[15px]
              font-normal
              leading-4.75
              text-neutral-400
            "
          >
            Signup was successful, you’ll be
            <br />
            directed to our homepage in {seconds} Sec
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  )
}
