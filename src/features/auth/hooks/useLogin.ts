
import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'


export const useLogin = () => {
    return useMutation({
        mutationKey: ['auth', 'login'],
        mutationFn: authApi.login,
        
    })
}

