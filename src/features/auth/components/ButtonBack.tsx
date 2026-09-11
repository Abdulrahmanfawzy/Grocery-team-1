import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ButtonBack({ path }: { path: string }) {
  return (
    <Link
      to={path}
      aria-label="Go back"
      className="
        absolute left-10 top-10
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-app-main/15
        bg-white
        text-app-main
        shadow-sm
        transition-all duration-200
        hover:-translate-x-1
        hover:bg-app-main
        hover:text-white
        hover:shadow-md
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-app-main/30
      "
    >
      <ArrowLeft size={18} strokeWidth={2} />
    </Link>
  )
}
