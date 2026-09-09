import { LockKeyhole, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '../../../components'

import AuthLayout from '../components/AuthLayout'
import LinkSocialMedia from '../components/linkSocialMedia'
import { loginSchema, type LoginFormValues } from '../schemas/auth.schema'

export const LoginPage = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
  }

  return (
    <AuthLayout>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold">Login your account!</h1>

          <p className="my-6 font-semibold">Welcome to Grocery Plus</p>
        </div>

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

          {/* Forget Password */}
          <Link className="hover:underline" to="/forget-password">
            Forget Password?
          </Link>

          {/* Login */}
          <Button type="submit" size="xl">
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
    </AuthLayout>
  )
}
