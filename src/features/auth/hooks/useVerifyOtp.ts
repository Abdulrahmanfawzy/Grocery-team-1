import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'
import type { ErrorResponse } from '../types/auth.types'



export const useVerifyOtp = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['auth', 'verify-otp'],
    mutationFn: authApi.forgotPasswordVerifyOtp,
    onSuccess(response: any) {
      toast.success(response.message)

      navigate(
        `/reset-password?challenge_id=${response.data.challenge_id}&reset_token=${response.data.reset_token}`,
      )
    }
    ,
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data?.message || 'Invalid oTP',
      )
    },
  }
  )
}