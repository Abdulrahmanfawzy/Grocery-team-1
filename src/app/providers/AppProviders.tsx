// App Providers

import { queryClient } from '@/lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const AppProviders = ({ children }: { children: ReactNode }) => {
  //   const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}
export default AppProviders
