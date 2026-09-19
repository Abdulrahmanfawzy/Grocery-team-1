
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { User } from '../types/auth.types'

const TOKEN_KEY = 'auth_token'

// Take token from local storage if it exists
const storedToken = localStorage.getItem(TOKEN_KEY) || null

type AuthState = {
  isAuthenticated: boolean
  token: string | null
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: !!storedToken,
  token: storedToken,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    // Login: save token only
    login: (
      state,
      action: PayloadAction<{ token: string }>,
    ) => {
      state.token = action.payload.token
      state.isAuthenticated = true

      localStorage.setItem(TOKEN_KEY, action.payload.token)
    },



    // Save authenticated user
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },

    // Logout
    logout: (state) => {
      state.token = null
      state.user = null
      state.isAuthenticated = false

      localStorage.removeItem(TOKEN_KEY)
    },
  },
})

export const {
  login,
  setUser,
  logout,
} = authSlice.actions

export default authSlice

