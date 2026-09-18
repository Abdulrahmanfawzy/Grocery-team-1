import { queryClient } from '@/lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import type { ReactNode } from 'react'

import { store } from '@/store'
import AuthInitializer from '@/features/auth/components/AuthInitializer'

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <AuthInitializer />
      </QueryClientProvider>
    </Provider>
  )
}

export default AppProviders
