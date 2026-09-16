// configureStore
import authSlice from '@/features/auth/store/authSlice'
import { configureStore } from '@reduxjs/toolkit'
// import productsReduser from './products/prodcutsSlice.ts'
export const store = configureStore({


  reducer: {
    auth: authSlice.reducer,


    // products: productsReduser
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
