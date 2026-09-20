export type seting = {
    id?: number
    language: string
    mode: string
    order_updated: number
    promotional_email: number
    nutrition_insights: number
    price_alerts: number
}

export type SettingResponse = {
    success: boolean
    message: string
    data: seting
}

