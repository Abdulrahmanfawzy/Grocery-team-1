import React from 'react'
import { Button, Card, Input } from '../../../components'
import { ArrowLeft, Mail, Phone } from 'lucide-react'
import ButtonBack from '../components/ButtonBack'

export default function ForgetPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <Card className="relative w-full max-w-[900px] min-h-[610px] rounded-[28px] border-0 bg-white shadow-xl overflow-hidden">
        {/* Back button */}
        <div className="hidden lg:block">
          <ButtonBack path={'/login'} />
        </div>

        <div className="flex min-h-[610px] items-center justify-center">
          <form className="w-full px-4 lg:px-50 text-center">
            <div className="lg:text-center mb-12 ">
              <h1 className="text-lg lg:text-xl font-semibold">Password Recovery</h1>
              <p className="mt-1 text-xs px-10">
                Enter your Mobile Number to recover your password
              </p>
            </div>
            {/* Input Phone */}
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your Number"
              Icon={<Phone size={19} />}
            />

            <Button className={'w-full mt-6'} size={'xl'}>
              Verify
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
