import { useQuery } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'

export const useAuthUser = () => {
  return useQuery({
    queryKey: ['auth', 'user'],
    queryFn: authApi.getAuthUser,
    enabled: !!localStorage.getItem('auth_token'), 
  })
}