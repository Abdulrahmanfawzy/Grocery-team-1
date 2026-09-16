import { LockKeyhole, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

import { Button, Input } from '../../../components'

import { loginSchema, type LoginFormValues } from '../schemas/auth.schema'

import LinkSocialMedia from '../components/LinkSocialMedia'
import PasswordInput from '../components/PasswordInput'
import AuthHeader from '../components/AuthHeader'

import { useLogin } from '../hooks/useLogin'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

export default function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { mutate: loginApi, isPending } = useLogin()

  const defaultValues = {
    email: '',
    password: '',
  }
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  const onSubmit = (values: LoginFormValues) => {
    loginApi(
      {
        ...values,
        device_name: 'Grocery Plus Web',
      },
      {
        onSuccess: async (response) => {
          try {
            // Save auth data in Redux
            dispatch(
              login({
                token: response.token,
              }),
            )

            toast.success(response.message)

            navigate('/')
          } catch {
            localStorage.removeItem('auth_token')

            toast.error('Login succeeded, but we could not load your account.')
          }
        },

        onError: (error: any) => {
          toast.error(
            'Invalid email or password ',
            // || error?.response?.data?.message
          )
        },
      },
    )
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
