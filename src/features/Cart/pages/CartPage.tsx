import AppBreadcrumb from '@/components/common/AppBreadcrumb'
import CartItems from '../components/CartItems'
import CartSummary from '../components/CartSummary'
import MoreToExplore from '../components/MoreToExplore'

const CartPage = () => {
  return (
    <main className="box-container py-8">
      <AppBreadcrumb
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Cart',
          },
        ]}
      />

      <CartItems />

      <CartSummary />

      <MoreToExplore />
    </main>
  )
}

export default CartPage
