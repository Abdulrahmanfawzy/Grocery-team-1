import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import { MainLayout } from '@/components/layout/MainLayout'

import HomePage from '@/features/home/pages/HomePage'
import ProductsPage from '@/features/products-list/pages/ProductsPage'
import CartPage from '@/features/Cart/pages/CartPage'

import { LoginPage } from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import ForgetPasswordPage from '@/features/auth/pages/ForgetPasswordPage'
import RestPasswordPage from '@/features/auth/pages/RestPasswordPage'
import VerifyPage from '@/features/auth/pages/VerifyPage'
import AuthImageLayout from '@/components/layout/AuthImageLayout'
import AuthLayout from '@/components/layout/AuthLayout'
import ProductDetails from '@/features/product-details/pages/ProductDetailsPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Main App
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'products',
            element: <ProductsPage />,
          },
          {
            path: 'products/:productId',
            element: <ProductDetails />,
          },
          {
            path: 'cart',
            element: <CartPage />,
          },
        ],
      },

      // Auth with image
      {
        element: <AuthImageLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },

      // Auth without image
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'forget-password',
            element: <ForgetPasswordPage />,
          },
          {
            path: 'rest-password',
            element: <RestPasswordPage />,
          },
          {
            path: 'verify',
            element: <VerifyPage />,
          },
        ],
      },
    ],
  },
])
