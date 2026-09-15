import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'


export const useVerifyOtp = () => {
  return useMutation({
    mutationKey: ['auth', 'verify-otp'],
    mutationFn: authApi.verifyOtp,
  })
}