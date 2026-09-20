import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'
import type { ErrorResponse } from '../types/auth.types'


export const useRegisterResendOtp = () => {
  return useMutation({
    mutationKey: ['auth', 'resend-otp'],
    mutationFn: authApi.resendPasswordRegisterOtp,
    onSuccess(response) {
      toast.success(response.message)
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data?.message || 'Invalid email or password',
      )
    },

  })
}