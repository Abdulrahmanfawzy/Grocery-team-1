import api from "@/lib/axios"
import type { seting, SettingResponse } from "../types/setting.types"
import type { AddressFormValues } from "../schema/address.schema"


export const settingApi = {
    getSetting: async (): Promise<SettingResponse> => {
        const response = await api.get('/user/settings')
        return response.data
    },

    updateSetting: async (data: seting): Promise<SettingResponse> => {
        const response = await api.put(`/user/settings`, data)

        return response.data
    },

    deleteSetting: async (): Promise<SettingResponse> => {
        const response = await api.delete(`/user/settings`)

        return response.data
    },
    downloadSetting: async (): Promise<SettingResponse> => {
        const response = await api.get(`/user/account/download`)

        return response.data
    },
}