// App Providers

import { queryClient } from '@/lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'

const AppProviders = ({ children }: { children: ReactNode }) => {
  //   const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}
export default AppProviders
