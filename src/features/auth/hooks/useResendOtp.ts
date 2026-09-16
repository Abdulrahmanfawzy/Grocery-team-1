import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'


export const useResendOtp = () => {
  return useMutation({
    mutationKey: ['auth', 'resend-otp'],
    mutationFn: authApi.resendOtp,
  })
}