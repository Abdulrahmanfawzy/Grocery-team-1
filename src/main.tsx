import '@/styles/globals.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './app/routes'
import AppProviders from './app/providers/AppProviders'

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <RouterProvider router={routes} />
  </AppProviders>,
)
