
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
export const registerSchema = z.object({
    username: z
        .string()
        .min(1, 'Username is required')
        .min(3, 'Username must be at least 3 characters'),

    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email'),

    phone: z
        .string()
        .min(1, 'Phone is required'),

    password: z
        .string()
        .min(6, 'Password must be at least 6 characters'),

    remember: z.boolean(),
})

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

