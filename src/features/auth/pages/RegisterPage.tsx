import { LockKeyhole, Mail, Phone, UserRound } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '../../../components'
import { Checkbox } from '../../../components/ui/checkbox'

import AuthLayout from '../../../components/layout/AuthLayout'
import LinkSocialMedia from '../components/linkSocialMedia'
import { registerSchema, type RegisterFormValues } from '../schemas/auth.schema'

export default function RegisterPage() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      remember: false,
    },
  })

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold">Create your account!</h1>

        <p className="my-6 font-semibold">Enter your Full Details</p>
      </div>

      {/* Inputs */}
      <div className="flex flex-col gap-6">
        {/* Username */}
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                id="username"
                type="text"
                placeholder="Username"
                Icon={<UserRound size={19} />}
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="Sarahem@gmail.com"
                Icon={<Mail size={19} />}
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                id="phone"
                type="tel"
                placeholder="Phone"
                Icon={<Phone size={19} />}
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="Enter your password"
                Icon={<LockKeyhole size={19} />}
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Remember Me */}
        <Controller
          name="remember"
          control={form.control}
          render={({ field }) => (
            <div className="flex items-center gap-3">
              <Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} />

              <label htmlFor="remember">Remember me</label>
            </div>
          )}
        />

        {/* Register Button */}
        <Button type="submit" size="xl">
          Continue
        </Button>
      </div>

      {/* Footer */}
      <LinkSocialMedia
        namePage="Login"
        path="/login"
        switchTitle="Already have an account?  "
        title="Sign Up With"
      />
    </form>
  )
}
