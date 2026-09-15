import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'


export const useResetPassword = () => {
  return useMutation({
    mutationKey: ['auth', 'reset-password'],
    mutationFn: authApi.resetPassword,
  })
}