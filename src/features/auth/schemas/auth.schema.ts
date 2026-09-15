
import { z } from 'zod'

// loginSchema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),

  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

export type LoginFormValues = z.infer<typeof loginSchema>



// registerSchema
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .min(2, 'Name must be at least 2 characters'),

    email: z
      .string()
      .email('Please enter a valid email'),

    phone: z
      .string()
      .min(1, 'Phone number is required'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/\d/, 'Password must contain at least one number'),

    password_confirmation: z
      .string()
      .min(1, 'Please confirm your password'),

    terms: z
      .boolean()
      .refine((value) => value === true, {
        message: 'You must accept the Terms & Conditions',
      }),
  })
  .refine(
    (data) => data.password === data.password_confirmation,
    {
      message: 'Passwords do not match',
      path: ['password_confirmation'],
    },
  )

export type RegisterFormValues = z.infer<typeof registerSchema>




// resetPasswordSchema
export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters')
      .regex(/\d/, 'Password must contain a number'),

    confirmPassword: z
      .string()
      .min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type ResetPasswordFormValues = z.infer<
  typeof resetPasswordSchema
>


// forgetPasswordSchema
export const forgetPasswordSchema = z.object({
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+?[0-9\s-]{10,15}$/, 'Please enter a valid phone number'),
})

export type ForgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>



// verifySchema
export const verifySchema = z.object({
  otp: z
    .string()
    .length(6, 'Please enter the 6-digit verification code'),
})

export type VerifyFormValues = z.infer<typeof verifySchema>

