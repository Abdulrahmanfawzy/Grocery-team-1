import { LockKeyhole, Mail, Phone, UserRound, CheckCircle2 } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button, Input } from '../../../components'
import { Checkbox } from '../../../components/ui/checkbox'

import LinkSocialMedia from '../components/LinkSocialMedia'
import PasswordInput from '../components/PasswordInput'
import AuthHeader from '../components/AuthHeader'

import { registerSchema, type RegisterFormValues } from '../schemas/auth.schema'

import { useRegister } from '../hooks/useRegister'
import { useDispatch } from 'react-redux'
import { register } from '../store/authSlice'

export default function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { mutate: registerApi, isPending } = useRegister()
  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    terms: false,
  }

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  })

  const onSubmit = (data: RegisterFormValues) => {
    registerApi(
      {
        ...data,
        device_name: 'Grocery Plus Web',
      },
      {
        onSuccess: (response) => {
          dispatch(
            register({
              user: response.data.user,
              token: response.data.token,
            }),
          )

          toast.success(response.message)

          navigate('/')
        },

        onError: (error: any) => {
          toast.error(error?.response?.data?.message || 'Something went wrong. Please try again.')
        },
      },
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      {/* Header */}
      <AuthHeader title="Create your account!" description="Enter your Full Details" />

      {/* Inputs */}
      <div className="flex flex-col gap-6">
        {/* Name */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                id="name"
                type="text"
                placeholder="Full Name"
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
                placeholder="Phone Number"
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

        {/* Confirm Password */}
        <Controller
          name="password_confirmation"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <PasswordInput
                {...field}
                id="password_confirmation"
                placeholder="Confirm your password"
                Icon={<CheckCircle2 size={19} />}
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Terms */}
        <Controller
          name="terms"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <div className="flex items-center gap-3">
                <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />

                <label htmlFor="terms" className="cursor-pointer text-sm text-slate-700">
                  I agree to the Terms & Conditions
                </label>
              </div>

              {fieldState.error && (
                <p className="mt-1 text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Submit */}
        <Button type="submit" size="xl" disabled={isPending} isLoading={isPending}>
          {isPending ? 'Creating account...' : 'Continue'}
        </Button>
      </div>

      {/* Footer */}
      <LinkSocialMedia
        namePage="Login"
        path="/login"
        switchTitle="Already have an account? "
        title="Sign Up With"
      />
    </form>
  )
}
