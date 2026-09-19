import { LockKeyhole, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '../../../components'

import { loginSchema, type LoginFormValues } from '../schemas/auth.schema'

import LinkSocialMedia from '../components/LinkSocialMedia'
import PasswordInput from '../components/PasswordInput'
import AuthHeader from '../components/AuthHeader'

import { useLogin } from '../hooks/useLogin'

export default function LoginPage() {
  const { mutate: login, isPending } = useLogin()

  const defaultValues = {
    email: '',
    password: '',
  }
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  const onSubmit = (values: LoginFormValues) => {
    login({
      ...values,
      device_name: 'Grocery Plus Web',
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      {/* Header */}
      <AuthHeader title="Login your account!" description="Welcome to Grocery Plus" />

      {/* Inputs */}
      <div className="flex flex-col gap-6">
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

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <PasswordInput
                {...field}
                id="password"
                placeholder="Enter your password"
                Icon={<LockKeyhole size={19} />}
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Forget Password */}
        <Link className="hover:underline" to="/forget-password">
          Forget Password?
        </Link>

        {/* Login */}
        <Button type="submit" size="xl" isLoading={isPending} disabled={isPending}>
          Continue
        </Button>
      </div>

      {/* Footer */}
      <LinkSocialMedia
        namePage="Sign Up"
        path="/register"
        switchTitle="Don’t have an account? "
        title="Continue In With"
      />
    </form>
  )
}
