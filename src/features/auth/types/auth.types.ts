
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
    token: string
    token_type: string
  }
}

// export type ApiValidationError = {
//   message: string
//   errors?: Record<string, string[]>
// }



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
}

