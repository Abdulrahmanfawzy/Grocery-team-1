import { addressApi } from "@/features/profile/services/Address.service"
import { useQuery } from "@tanstack/react-query"

export default function useAddress() {
    return useQuery({
        queryKey: ['addresses'],
        queryFn: () => addressApi.getAddresses(),
    })
}