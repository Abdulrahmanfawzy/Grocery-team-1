import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react'

import { Button, Input } from '@/components'
import { Label } from '@/components/ui/label'

import PasswordRequirement from './PasswordRequirement'

type PasswordRequirement = {
  id: string
  label: string
}

/* =========================================================
   DATA
========================================================= */

const passwordRequirements: PasswordRequirement[] = [
  {
    id: 'length',
    label: 'At least 8 characters',
  },
  {
    id: 'number',
    label: 'Contains a number',
  },
]

export default function ChangePassword() {
  const form = useForm<ChangePasswordFormValues>({
    // resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: ChangePasswordFormValues) => {
    console.log(data)
  }

  return (
    <section
      className="
        rounded-lg
        border
        border-slate-200
        bg-[#f5fafc]
        p-7
       
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <LockKeyhole size={18} className=" text-app-main" />

        <h2 className="text-md font-medium text-slate-800">Change Password</h2>
      </div>

      {/* Description */}
      <p className="ml-6 mt-1 text-xs text-slate-400">
        Enter a new password to replace the old password
      </p>

      {/* Form */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 w-full ">
        {/* Current Password */}
        <Controller
          name="currentPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="space-y-1.5">
              <Label htmlFor="current-password" className="text-xs font-medium text-slate-700">
                Current Password
              </Label>

              <Input
                {...field}
                id="current-password"
                type="password"
                placeholder="Enter Current Password"
                className="
                  
                  rounded-md
                  border-slate-200
                  bg-white
                  text-sm
                  shadow-none
                  placeholder:text-slate-400
                  focus:border-app-main
                "
                Icon={<LockKeyhole size={19} />}
              />

              {fieldState.error && (
                <p className="text-xs text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* New Password */}
        <Controller
          name="newPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="new-password" className="text-xs font-medium text-slate-700">
                New Password
              </Label>

              <Input
                {...field}
                id="new-password"
                type="password"
                placeholder="Enter New Password"
                className="
                  
                  rounded-md
                  border-slate-200
                  bg-white
                  text-sm
                  shadow-none
                  placeholder:text-slate-400
                  focus:border-app-main
                "
                Icon={<ShieldCheck size={19} />}
              />

              {fieldState.error && (
                <p className="text-xs text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="confirm-password" className="text-xs font-medium text-slate-700">
                Confirm New Password
              </Label>

              <Input
                {...field}
                id="confirm-password"
                type="password"
                placeholder="Confirm New Password"
                className="
                  
                  rounded-md
                  border-slate-200
                  bg-white
                  text-sm
                  shadow-none
                  placeholder:text-slate-400
                  focus:border-app-main
                "
                Icon={<CheckCircle2 size={19} />}
              />

              {fieldState.error && (
                <p className="text-xs text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Requirements */}
        <div className="mt-4">
          <p className="text-sm text-app-main fw-">Your password must contain:</p>

          <div className="mt-2 space-y-1">
            {passwordRequirements.map((requirement) => (
              <PasswordRequirement key={requirement.id} requirement={requirement} />
            ))}
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="
          mt-6
          px-8
          "
          size={'lg'}
        >
          Update Password
        </Button>
      </form>
    </section>
  )
}
