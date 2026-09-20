
import { z } from 'zod'

// loginSchema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email')
    .max(255, 'Email must be less than 255 characters'),


  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain an uppercase letter')
    .regex(/[a-z]/, 'Password must contain a lowercase letter')
    .regex(/[0-9]/, 'Password must contain a number')
    .regex(
      /[^A-Za-z0-9]/,
      'Password must contain a special character',
    ),
})

export type LoginFormValues = z.infer<typeof loginSchema>



// registerSchema

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(255, 'Name must be less than 255 characters'),

    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please enter a valid email')
      .max(255, 'Email must be less than 255 characters'),

    phone: z
      .string()
      .min(1, 'Phone number is required')
      .max(20, 'Phone number must be less than 20 characters'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain an uppercase letter')
      .regex(/[a-z]/, 'Password must contain a lowercase letter')
      .regex(/[0-9]/, 'Password must contain a number')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain a special character',
      ),

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
    (data) =>
      data.password === data.password_confirmation,
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
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain an uppercase letter')
      .regex(/[a-z]/, 'Password must contain a lowercase letter')
      .regex(/[0-9]/, 'Password must contain a number')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain a special character',
      ),

    password_confirmation: z
      .string()
      .min(8, 'Password must be at least 8 characters')

    ,
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password_confirmation'],
  })

export type ResetPasswordFormValues = z.infer<
  typeof resetPasswordSchema
>


// forgetPasswordSchema
export const forgetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email')
    .max(255, 'Email must be less than 255 characters'),

})

export type ForgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>



// verifySchema
export const verifySchema = z.object({
  otp: z
    .string()
    .length(4, 'Please enter the 4-digit verification code'),
})

export type VerifyFormValues = z.infer<typeof verifySchema>

