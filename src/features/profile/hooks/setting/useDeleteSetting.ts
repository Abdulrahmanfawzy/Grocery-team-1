import { useMutation } from "@tanstack/react-query"
import { settingApi } from "../../services/Setting.service"
import { toast } from "react-toastify"

export function useDeleteSetting() {
    return useMutation({
        mutationFn: () => settingApi.deleteSetting(),
        onSuccess: (response) => {
            toast.success(response.message)
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
}