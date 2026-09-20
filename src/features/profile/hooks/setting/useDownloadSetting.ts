import { useMutation } from "@tanstack/react-query"
import { settingApi } from "../../services/Setting.service"
import { toast } from "react-toastify"

export function useDownloadSetting() {
    return useMutation({
        mutationFn: () => settingApi.downloadSetting(),
        onSuccess: (response) => {
            toast.success(response.message)
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
}