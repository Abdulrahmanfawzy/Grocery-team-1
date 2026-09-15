import api from '@/lib/axios'
import type {
    ForgotPasswordRequest,
    GoogleLoginRequest,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
    ResendOtpRequest,
    ResetPasswordRequest,
    User,
    VerifyOtpRequest,
} from '../types/auth.types'

export const authApi = {



    register: async (
        data: RegisterRequest,
    ): Promise<RegisterResponse> => {
        const response = await api.post<RegisterResponse>(
            '/auth/register',
            data,
        )
        return response.data
    },




    login: async (data: LoginRequest) => {
        const response = await api.post<LoginResponse>(
            '/auth/login',
            data,
        )

        return response.data
    },

    getAuthUser: async () => {
        const response = await api.get<User>('/user')
        console.log(response.data);
        
        return response.data
    },

    forgotPassword: async (data: ForgotPasswordRequest) => {
        const response = await api.post(
            '/auth/password/forgot',
            data,
        )

        return response.data
    },

    resendOtp: async (data: ResendOtpRequest) => {
        const response = await api.post(
            '/auth/password/resend-otp',
            data,
        )

        return response.data
    },

    verifyOtp: async (data: VerifyOtpRequest) => {
        const response = await api.post(
            '/auth/password/verify-otp',
            data,
        )

        return response.data
    },

    resetPassword: async (data: ResetPasswordRequest) => {
        const response = await api.post(
            '/auth/password/reset',
            data,
        )

        return response.data
    },

    googleLogin: async (data: GoogleLoginRequest) => {
        const response = await api.post(
            '/auth/google',
            data,
        )

        return response.data
    },
}

