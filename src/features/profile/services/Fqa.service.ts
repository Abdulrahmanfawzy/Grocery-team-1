import api from "@/lib/axios"
import type { FQAResponse } from "../types/fqa.types copy"

export const fqaApi = {
    getFqa: async (): Promise<FQAResponse> => {
        const response = await api.get('/faq')

        return response.data
    },


}