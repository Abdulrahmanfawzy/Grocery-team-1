
export type ErrorResponse = {
  message: string
  success: boolean

}

// user types
export type AuthUserResponse = {
  data: User[]
}
export type User = {
  id: number
  name: string
  email: string
  phone: string
  role: string
  created_at: string
}

// register request and response types
export type RegisterRequest = {
  name: string
  email: string
  phone: string
  password: string
  password_confirmation: string
  terms: boolean
  device_name: string
}

export type RegisterResponse = {
  success: boolean
  message: string
  data: {
    user: User
    verification_required: boolean,
    challenge_id: string,
    channel: string,
    destination: string,
    expires_at: string

  }

}


// login request and response types

export type LoginRequest = {
  email: string
  password: string
  device_name: string
}
1
export type LoginResponse = {
  message: string
  mfa_required: boolean
  token: string
  token_type: string
  user: User

}




// otp  registration verification request and response types
export type VerifyOtpPayload = {
  challenge_id: string
  otp: string

}

export type VerifyOtpResponse = {
  success: boolean,
  message: string
}

// reset password request and response types

export type ResetPasswordRequest = {
  challenge_id: string
  reset_token: string
  password: string
  password_confirmation: string
}
