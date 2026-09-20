import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'



export const useRegisterVerifyOtp = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['auth', 'verify-otp'],
    mutationFn: authApi.verifyOtp,
    onSuccess(response: any) {
      toast.success(response.message)

     navigate("/login")
    },
    onError(error: any) {
      toast.error(error.response?.data?.message || 'Something went wrong')

    },
  }
  )
}