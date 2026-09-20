import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'
import { toast } from 'sonner'
import type { AxiosError } from 'axios'
import type { ErrorResponse } from '../types/auth.types'
import { useNavigate } from 'react-router-dom'


export const useForgotPassword = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['auth', 'forgot-password'],
    mutationFn: authApi.forgotPassword,
    onSuccess(response) {
      toast.success(response.message)
      navigate(`/verify-forget-password?challenge_id=${response.data.challenge_id}`)

    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(
        error.response?.data?.message || 'Invalid email or password',
      )
    },
  })
}