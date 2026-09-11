import { FilterIcon } from 'lucide-react'
import { useState } from 'react'
import FilterSidbar from './FilterSidbar'

const SidbarInMobile = () => {
  const [isOpenSidbar, setIsOpenSidbar] = useState(false)

  const closeSidBar = () => {
    setIsOpenSidbar(false)
  }
  const openSidBar = () => {
    setIsOpenSidbar(true)
  }
  return (
    <>
      {/* Icon*/}
      <button
        onClick={openSidBar}
        className="text-white md:hidden flex items-center gap-4 cursor-pointer px-3  bg-linear-to-br from-app-main/95 via-app-main/80 to-app-main/70 py-1 rounded-md"
      >
        <FilterIcon />
        <p className="text-20 font-semibold">Filter</p>
      </button>

      {/* Overlay */}
      {isOpenSidbar && (
        <div onClick={closeSidBar} className="fixed overflow-hidden inset-0 bg-black/60 z-40" />
      )}

      {/* SidBar */}
      <div
        className={`transition-all duration-300 z-40 fixed top-0 left-0 h-screen w-80
            overflow-y-auto ${isOpenSidbar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      >
        <div className="absolute inset-0 bg-black/60">
          <FilterSidbar closeSidBar={closeSidBar} />
        </div>
      </div>
    </>
  )
}

export default SidbarInMobile
