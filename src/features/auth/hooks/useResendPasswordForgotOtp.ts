import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'


export const useResendPasswordForgotOtp = () => {
  return useMutation({
    mutationKey: ['auth', 'resend-password-forgot-Otp'],
    mutationFn: authApi.resendPasswordForgotOtp,
  })
}