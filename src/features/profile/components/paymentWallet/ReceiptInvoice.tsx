import { Button } from '@/components/ui/Button'

export default function ReceiptInvoice() {
  return (
    <section className="rounded-lg border flex flex-col gap-3 border-slate-200 bg-white p-4">
      <div className="">
        <h2 className="text-lg font-semibold text-slate-900">Receipt & Invoice</h2>

        <p className=" text-xs text-slate-400">Download PDF receipts for your orders</p>
      </div>

      <Button type="button" size={'lg'} className={'px-5  w-fit'}>
        Download All Receipts
      </Button>
    </section>
  )
}
