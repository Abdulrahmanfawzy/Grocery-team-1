import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, setUser } from '../store/authSlice'
import { toast } from 'sonner'
import type { AxiosError } from 'axios'

interface ErrorResponse {
    message: string
    success: boolean
}

export const useLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return useMutation({
        mutationKey: ['auth', 'login'],
        mutationFn: authApi.login,

        onSuccess: (response) => {
            dispatch(
                login({
                    token: response.token,
                }),
            )

            dispatch(setUser(response.user))

            toast.success(response.message)

            navigate('/')
        },

        onError: (error: AxiosError<ErrorResponse>) => {
            console.log(error)

            toast.error(
                error.response?.data?.message || 'Invalid email or password',
            )
        },
    })
}