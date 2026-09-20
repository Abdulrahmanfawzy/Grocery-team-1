import { useQuery } from "@tanstack/react-query"
import { fqaApi } from "../../services/Fqa.service"

export function useGetFqa() {
    return useQuery({
        queryKey: ["fqa"],
        queryFn: () => fqaApi.getFqa()
    })
}