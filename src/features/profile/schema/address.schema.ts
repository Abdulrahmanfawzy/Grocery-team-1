
import { z } from 'zod'

export const addressSchema = z.object({
    label: z
        .string()
        .min(1, 'Label is required')
        .max(50, 'Label must be less than 50 characters'),

    address: z
        .string()
        .min(1, 'Address is required'),

    city: z
        .string()
        .min(1, 'City is required'),

    provenance: z
        .string()
        .min(1, 'Province is required'),

    postal_code: z
        .string()
        .min(1, 'Postal code is required'),

    is_default: z.boolean(),
})

export type AddressFormValues = z.infer<
    typeof addressSchema
>

