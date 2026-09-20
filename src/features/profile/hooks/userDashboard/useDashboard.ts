import { useQuery } from '@tanstack/react-query'
import { dashboardApi } from '../../services/Dashboard.service'

export const useDashboard = () => {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: dashboardApi.getDashboard,
    })
}