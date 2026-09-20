import { Spinner } from '@/components/ui/spinner'

export default function Loader() {
  return (
    <div className=" flex justify-center">
      <Spinner className="size-8 mt-5 text-app-main" />{' '}
    </div>
  )
}
