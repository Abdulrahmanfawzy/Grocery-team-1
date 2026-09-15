import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'


export const useForgotPassword = () => {
  return useMutation({
    mutationKey: ['auth', 'forgot-password'],
    mutationFn: authApi.forgotPassword,
  })
}