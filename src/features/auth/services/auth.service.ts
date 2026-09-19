import api from '@/lib/axios'
import type {

    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,

    ResetPasswordRequest,

    User,
    VerifyOtpPayload,
    VerifyOtpResponse,
} from '../types/auth.types'

export const authApi = {


    // register
    register: async (
        data: RegisterRequest,
    ): Promise<RegisterResponse> => {
        const response = await api.post<RegisterResponse>(
            '/auth/register',
            data,
        )
        return response.data
    },

    // otp register
    verifyOtp: async (data: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
        const response = await api.post<VerifyOtpResponse>("/auth/register/verify", data);
        return response.data;
    }
    ,
    forgotPasswordVerifyOtp: async (data: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
        const response = await api.post<VerifyOtpResponse>("/auth/password/verify-otp", data);
        return response.data;
    }
    ,
    // login
    login: async (data: LoginRequest) => {
        const response = await api.post<LoginResponse>(
            '/auth/login',
            data,
        )

        return response.data
    },

    getAuthUser: async () => {
        const response = await api.get<User>('/user')
        return response.data
    },



    forgotPassword: async (email: string) => {
        const response = await api.post(
            '/auth/password/forgot',
            { email },
        )

        return response.data
    },

    resendPasswordForgotOtp: async (
        challenge_id: string
    ) => {
        const response = await api.post(
            '/auth/password/resend-otp',
            { challenge_id },
        )

        return response.data
    },
    resendPasswordRegisterOtp: async (
        challenge_id: string
    ) => {
        const response = await api.post(
            '/auth/register/resend-otp',
            { challenge_id },
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

    // googleLogin: async (data: GoogleLoginRequest) => {
    //     const response = await api.post(
    //         '/auth/google',
    //         data,
    //     )

    //     return response.data
    // },
}

