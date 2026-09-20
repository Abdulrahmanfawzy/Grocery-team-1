import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addressApi } from "../../services/Address.service";
import type { AddressFormValues } from "../../schema/address.schema";
import { toast } from "react-toastify";


export function useCreateAddress() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: AddressFormValues) => addressApi.addAddress(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['addresses']
            })
            toast.success('Address added successfully')
        },
        onError: () => {
            toast.error('Failed to add address')
        }
    })
}