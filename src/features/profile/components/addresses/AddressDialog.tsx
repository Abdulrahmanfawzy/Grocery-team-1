
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'



import type { Address } from '../../types/address.types'
import { addressSchema, type AddressFormValues } from '../../schema/address.schema'
import { Button, Input } from '@/components'

type AddressDialogProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    address: Address | null
    onSubmit: (data: AddressFormValues) => void
    isUpdate: boolean
    mood: "update" | "create"
}

export default function AddressDialog({
    open,
    onOpenChange,
    address,
    onSubmit,
    isUpdate,
    mood
}: AddressDialogProps) {
    const form = useForm<AddressFormValues>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            label: '',
            address: '',
            city: '',
            provenance: '',
            postal_code: '',
            is_default: false,
        },
    })

    useEffect(() => {
        if (!address) return

        form.reset({
            label: address.label,
            address: address.address,
            city: address.city,
            provenance: address.provenance,
            postal_code: address.postal_code,
            is_default: address.is_default,
        })
    }, [address, form])

    const handleSubmit = (data: AddressFormValues) => {
        onSubmit(data)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="font-inter sm:max-w-[520px]">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                        {mood === "update" ? "Edit Address" : "Add Address"}
                    </DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-4"
                >
                    {/* Label */}
                    <Controller
                        name="label"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div className="space-y-1.5">
                                <Label htmlFor="label">Label</Label>

                                <Input
                                    {...field}
                                    id="label"
                                    placeholder="Home"
                                />

                                {fieldState.error && (
                                    <p className="text-xs text-destructive">
                                        {fieldState.error.message}
                                    </p>
                                )}
                            </div>
                        )}
                    />

                    {/* Address */}
                    <Controller
                        name="address"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div className="space-y-1.5">
                                <Label htmlFor="address">
                                    Address
                                </Label>

                                <Input
                                    {...field}
                                    id="address"
                                    placeholder="Enter your address"
                                />

                                {fieldState.error && (
                                    <p className="text-xs text-destructive">
                                        {fieldState.error.message}
                                    </p>
                                )}
                            </div>
                        )}
                    />

                    {/* City + Province */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Controller
                            name="city"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <div className="space-y-1.5">
                                    <Label htmlFor="city">City</Label>

                                    <Input
                                        {...field}
                                        id="city"
                                        placeholder="Tanta"
                                    />

                                    {fieldState.error && (
                                        <p className="text-xs text-destructive">
                                            {fieldState.error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        <Controller
                            name="provenance"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <div className="space-y-1.5">
                                    <Label htmlFor="provenance">
                                        Province
                                    </Label>

                                    <Input
                                        {...field}
                                        id="provenance"
                                        placeholder="Mansoura"
                                    />

                                    {fieldState.error && (
                                        <p className="text-xs text-destructive">
                                            {fieldState.error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* Postal Code */}
                    <Controller
                        name="postal_code"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <div className="space-y-1.5">
                                <Label htmlFor="postal_code">
                                    Postal Code
                                </Label>

                                <Input
                                    {...field}
                                    id="postal_code"
                                    placeholder="52612"
                                />

                                {fieldState.error && (
                                    <p className="text-xs text-destructive">
                                        {fieldState.error.message}
                                    </p>
                                )}
                            </div>
                        )}
                    />

                    {/* Default Address */}
                    <Controller
                        name="is_default"
                        control={form.control}
                        render={({ field }) => (
                            <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">
                                        Default Address
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Use this as your default delivery address
                                    </p>
                                </div>

                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </div>
                        )}
                    />

                    {/* Actions */}
                    <DialogFooter>
                        <Button
                            size={"lg"}
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>

                        <Button disabled={isUpdate} isLoading={isUpdate} size={"lg"} type="submit">
                            Save Changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

