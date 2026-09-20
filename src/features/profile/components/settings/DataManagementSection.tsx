import { Button } from '@/components'
import { Download, Trash2 } from 'lucide-react'
import { useDownloadSetting } from '../../hooks/setting/useDownloadSetting'
import { useDeleteSetting } from '../../hooks/setting/useDeleteSetting'

export default function DataManagementSection() {
  const { mutate: downloadSetting, isPending: isPendingDownload } = useDownloadSetting()
  const { mutate: deletSetting, isPending: isPendingDelete } = useDeleteSetting()

  return (
    <section className="rounded-md border border-gray-200 bg-card px-4 py-7">
      <h2 className="text-md font-medium text-foreground">Data Management</h2>

      <div className="mt-4 space-y-3">
        {/* Download */}
        <Button
          type="button"
          variant="outline"
          onClick={() => { downloadSetting() }}
          size={'lg'}
          className={'w-full h-18 px-6'}
          disabled={isPendingDownload}
          isLoading={isPendingDownload}
        >
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium text-foreground">Download Your Data</span>

            <span className="mt-0.5 text-xxs font-normal text-muted-foreground">
              Get a copy of your account information
            </span>
          </div>

          <Download size={25} className="ml-auto text-muted-foreground" />
        </Button>

        {/* Delete */}
        <Button
          type="button"
          variant="destructive"
          onClick={() => { deletSetting() }}
          disabled={isPendingDelete}
          isLoading={isPendingDelete}
          className={'w-full h-18 px-6 flex  justify-start'}
        >
          <Trash2 size={25} />

          <div className="flex flex-col items-start">
            <span className="text-xs font-medium">Delete Account</span>

            <span className="mt-0.5 text-xxs font-normal text-red-500">
              Permanently delete your account and data
            </span>
          </div>
        </Button>
      </div>
    </section>
  )
}
