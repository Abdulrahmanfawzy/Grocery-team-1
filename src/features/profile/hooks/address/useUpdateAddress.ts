import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addressApi } from "../../services/Address.service"
import type { Address } from "../../types/address.types"
import { toast } from "react-toastify"
import type { EditAddressFormValues } from "../../schema/address.schema"

export default function useUpdateAddress() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ data, id }: { data: EditAddressFormValues, id: number }) => addressApi.updateAddress(data, id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] })
            toast.success('Address updated successfully')
        },
        onError: () => {
            toast.error('Failed to update address')
        }
    })
}