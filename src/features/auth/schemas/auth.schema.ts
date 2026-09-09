
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