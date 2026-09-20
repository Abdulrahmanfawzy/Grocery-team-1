import { useMutation } from "@tanstack/react-query"
import { settingApi } from "../../services/Setting.service"
import { toast } from "sonner"

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