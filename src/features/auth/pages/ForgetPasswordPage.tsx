import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Phone } from 'lucide-react'

import { Button, Card, Input } from '../../../components'
import ButtonBack from '../components/ButtonBack'
import { forgetPasswordSchema, type ForgetPasswordFormValues } from '../schemas/auth.schema'
import { useForgotPassword } from '../hooks/useForgotPassword'

export default function ForgetPasswordPage() {
  const { mutate: forgetPassword, isPending } = useForgotPassword()
  const form = useForm<ForgetPasswordFormValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: ForgetPasswordFormValues) => {
    forgetPassword(data.email)
  }

  return (
    <Card className="relative min-h-152.5 w-full max-w-225! overflow-hidden rounded-[28px] border-0 bg-white shadow-xl">
      {/* Back Button */}
      <div className="hidden lg:block">
        <ButtonBack path="/login" />
      </div>

      <div className="flex min-h-152.5 items-center justify-center">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-4 text-center lg:px-50">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-lg font-semibold lg:text-xl">Password Recovery</h1>

            <p className="mt-1 px-10 text-xs">Enter your email address to recover your password</p>
          </div>

          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="text-left">
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  Icon={<Phone size={19} />}
                />

                {fieldState.error && (
                  <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />

          {/* Submit */}
          <Button
            disabled={isPending}
            isLoading={isPending}
            type="submit"
            className="mt-6 w-full"
            size="xl"
          >
            Verify
          </Button>
        </form>
      </div>
    </Card>
  )
}
