const DescriptionContent = ({ description }: { description: string }) => {
  return (
    <div className="mt-4 max-w-2xl rounded-lg border border-border-color bg-app-light-gray px-4 py-5 sm:px-6">
      <p className="max-w-3xl whitespace-pre-line text-sm font-normal leading-7 text-app-muted">
        {description}
      </p>
    </div>
  )
}

export default DescriptionContent
