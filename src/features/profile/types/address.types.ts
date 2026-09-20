export type Address = {
    id: number
    label: string
    address: string
    city: string
    provenance: string
    postal_code: string
    is_default: boolean
}

export type AddressesResponse = {
    success: boolean
    message: string
    data: Address[]
}


export type AddressDeleteResponse = {
    success: boolean
    message: string
    data: string
}
