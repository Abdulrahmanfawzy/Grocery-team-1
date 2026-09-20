import api from "@/lib/axios"
import type { DashboardResponse } from "../types/dashboard.types"

export const dashboardApi = {
    getDashboard: async (): Promise<DashboardResponse> => {
        const response = await api.get('/user/profile-info')

        return response.data
    },
}