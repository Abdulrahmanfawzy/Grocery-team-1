// configureStore
import { configureStore } from '@reduxjs/toolkit'
import productsReduser from './products/prodcutsSlice.ts'
export const store = configureStore({
  reducer: { products: productsReduser },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
