import { Button } from '@/components'
import { Archive } from 'lucide-react'

export default function ArchivedLists() {
  return (
    <section
      className="
        rounded-lg
        border
        border-slate-300
        bg-white
        p-4
      "
    >
      <div className="flex items-center gap-2">
        <Archive size={20} className=" text-slate-500" />

        <h2 className="text-md font-medium text-slate-800">Archived Lists</h2>
      </div>

      <p className="mt-2 text-xs text-slate-500">View and restore your archived shopping lists</p>

      <Button variant={'link'}  className={"px-0 text-slate-700 text-xs"} >View Archived Lists (3)</Button>
    </section>
  )
}
