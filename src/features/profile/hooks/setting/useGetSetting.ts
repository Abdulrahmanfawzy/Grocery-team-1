import { useQuery } from "@tanstack/react-query"
import { settingApi } from "../../services/Setting.service"

export default function useGetSetting() {
    return useQuery({
        queryKey: ['setting'],
        queryFn: () => settingApi.getSetting(),
    })
}