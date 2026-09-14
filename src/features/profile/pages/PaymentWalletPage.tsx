import StoreCredit from '../components/StoreCredit'
import PaymentMethods from '../components/paymentWallet/PaymentMethods'
import PaymentHistory from '../components/paymentWallet/PaymentHistory'
import ReceiptInvoice from '../components/paymentWallet/ReceiptInvoice'
import ProfileHeader from '../components/ProfileHeader'

export default function PaymentWalletPage() {
  return (
    <div className=" space-y-10">
      {/* =================================================
            PAGE HEADER
        ================================================= */}
      <ProfileHeader
        title="Payment & Wallet"
        description="Manage your payment methods and view transaction history"
      />

      {/* =================================================
            STORE CREDIT
        ================================================= */}

      <StoreCredit />

      {/* =================================================
            PAYMENT METHODS
        ================================================= */}

      <PaymentMethods />

      {/* =================================================
            PAYMENT HISTORY
        ================================================= */}

      <PaymentHistory />

      {/* =================================================
            RECEIPTS
        ================================================= */}

      <ReceiptInvoice />
    </div>
  )
}
