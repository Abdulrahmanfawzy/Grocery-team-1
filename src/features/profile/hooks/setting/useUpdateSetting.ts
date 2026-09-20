import { useMutation } from "@tanstack/react-query"
import { settingApi } from "../../services/Setting.service"
import { toast } from "react-toastify"
import type { seting } from "../../types/setting.types"
import { useQueryClient } from "@tanstack/react-query"


export function useUpdateSetting() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: seting) => settingApi.updateSetting(data),
        onSuccess: (response) => {
            toast.success(response.message)
            queryClient.invalidateQueries({ queryKey: ['setting'] })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
}