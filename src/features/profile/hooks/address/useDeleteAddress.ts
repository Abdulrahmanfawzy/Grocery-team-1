import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addressApi } from "../../services/Address.service"
import { toast } from "react-toastify"


const useDeleteAddress = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: number) => addressApi.deleteAddress(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] })
            toast.success('Address deleted successfully')
        },
        onError: () => {
            toast.error('Failed to delete address')
        }
    })
}

export default useDeleteAddress
