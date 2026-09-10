// routes

import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProductsPage from '@/features/products-list/pages/ProductsPage'

import { LoginPage } from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import ForgetPasswordPage from '@/features/auth/pages/ForgetPasswordPage'
import RestPasswordPage from '@/features/auth/pages/RestPasswordPage'
import VerifyPage from '@/features/auth/pages/VerifyPage'


import CartPage from '@/features/Cart/pages/CartPage'

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
      {

        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/forget-password',
        element: <ForgetPasswordPage />,
      },
      {
        path: '/rest-password',
        element: <RestPasswordPage />,
      },
      {
        path: '/verify',
        element: <VerifyPage />,

        path: '/cart',
        element: <CartPage />,

      },
    ],
  },
])
