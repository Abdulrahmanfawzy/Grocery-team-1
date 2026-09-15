import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'


export const useRegister = () => {
  return useMutation({
    mutationKey: ['auth', 'register'],
    mutationFn: authApi.register,
  })
}