// routes

import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import ProductsPage from '@/features/products-list/pages/ProductsPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
])
