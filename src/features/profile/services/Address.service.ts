import api from "@/lib/axios"
import type { Address, AddressDeleteResponse, AddressesResponse } from "../types/address.types"
import type { AddressFormValues } from "../schema/address.schema"

export const addressApi = {
    getAddresses: async (): Promise<AddressesResponse> => {
        const response = await api.get('/user/addresses')

        return response.data
    },

    addAddress: async (data: AddressFormValues): Promise<AddressesResponse> => {
        const response = await api.post('/user/addresses', data)

        return response.data
    },

    updateAddress: async (data: AddressFormValues, id: number): Promise<AddressesResponse> => {
        const response = await api.put(`/user/addresses/${id}`, data)

        return response.data
    },

    deleteAddress: async (id: number): Promise<AddressDeleteResponse> => {
        const response = await api.delete(`/user/addresses/${id}`)

        return response.data
    },
}