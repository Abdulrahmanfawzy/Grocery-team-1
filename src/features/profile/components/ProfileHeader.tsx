
type propsProfileHeader = {
  title: string
  description: string
}

export default function ProfileHeader({ title, description }: propsProfileHeader) {
  return (
    <header>
      <h1 className="text-base font-semibold text-slate-900 sm:text-lg">{title}</h1>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </header>
  )
}
