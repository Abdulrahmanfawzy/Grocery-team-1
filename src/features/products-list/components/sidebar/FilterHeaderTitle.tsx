const FilterHeaderTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex  items-center gap-5">
      <div className="flex justify-center items-center gap-1">
        <span className="bg-app-main w-5 block h-1 rounded-xl"></span>
        <span className="bg-app-main w-1 block h-1 rounded-sm"></span>
      </div>
      <p className="text-lg font-medium text-sidebar-color">{title}</p>
    </div>
  )
}

export default FilterHeaderTitle
