type propsAuthHeader = {
  title: string
  description: string
}
export default function AuthHeader({ title, description }: propsAuthHeader) {
  return (
    <header>
      <h1 className="text-xl font-semibold">{title}</h1>

      <p className="my-6 font-semibold">{description}</p>
    </header>
  )
}
