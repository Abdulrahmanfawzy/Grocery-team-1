import OtherPaymentMethods from "./OtherPaymentMethods";
import SavedCards from "./SavedCards";


export  default function PaymentMethods() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SavedCards  />

        <OtherPaymentMethods />
      </div>
    </section>
  )
}
