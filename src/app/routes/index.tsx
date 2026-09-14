import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import { MainLayout } from '@/components/layout/MainLayout'

import HomePage from '@/features/home/pages/HomePage'
import ProductsPage from '@/features/products-list/pages/ProductsPage'
import CategoryPage from '@/features/categories/pages/CategoryPage'
import CartPage from '@/features/Cart/pages/CartPage'

import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import ForgetPasswordPage from '@/features/auth/pages/ForgetPasswordPage'
import RestPasswordPage from '@/features/auth/pages/RestPasswordPage'
import VerifyPage from '@/features/auth/pages/VerifyPage'

import AuthImageLayout from '@/components/layout/AuthImageLayout'
import AuthLayout from '@/components/layout/AuthLayout'
import ProductDetails from '@/features/product-details/pages/ProductDetailsPage'

// Profile
import ProfileLayout from '@/components/layout/ProfileLayout'
import SettingsPage from '@/features/profile/pages/SettingsPage'
import DashboardPage from '@/features/profile/pages/DashboardPage'
import PersonalInfoPage from '@/features/profile/pages/PersonalInfoPage'
import PaymentWalletPage from '@/features/profile/pages/PaymentWalletPage'
import OrderHistoryPage from '@/features/profile/pages/OrderHistoryPage'
import SmartListsPage from '@/features/profile/pages/SmartListsPage'
import AddressesPage from '@/features/profile/pages/AddressesPage'
import SecurityLoginPage from '@/features/profile/pages/SecurityLoginPage'
import HelpSupportPage from '@/features/profile/pages/HelpSupportPage'
import LoyaltyRewardsPage from '@/features/profile/pages/LoyaltyRewardsPage'

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
            path: 'categories',
            element: <CategoryPage />,
          },
          {
            path: 'products/:productId',
            element: <ProductDetails />,
          },
          {
            path: 'cart',
            element: <CartPage />,
          },

          // Profile
          {
            path: 'profile',
            element: <ProfileLayout />,
            children: [
              {
                index: true,
                element: <DashboardPage />,
              },
              {
                path: 'personal-info',
                element: <PersonalInfoPage />,
              },
              {
                path: 'payment-wallet',
                element: <PaymentWalletPage />,
              },
              {
                path: 'order-history',
                element: <OrderHistoryPage />,
              },
              {
                path: 'smart-lists',
                element: <SmartListsPage />,
              },
              {
                path: 'addresses',
                element: <AddressesPage />,
              },
              {
                path: 'security-login',
                element: <SecurityLoginPage />,
              },
              {
                path: 'loyalty-rewards',
                element: <LoyaltyRewardsPage />,
              },
              {
                path: 'help-support',
                element: <HelpSupportPage />,
              },
              {
                path: 'settings',
                element: <SettingsPage />,
              },
            ],
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
