const items = [
  { value: '02', label: 'Days' },
  { value: '24', label: 'Hours' },
  { value: '59', label: 'Minutes' },
  { value: '59', label: 'Seconds' },
]

const Countdown = () => {
  return (
    <div className="flex w-full items-start justify-center gap-1.5 px-2 py-2 sm:gap-3 sm:px-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-start gap-1.5 sm:gap-3">
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {item.value.split('').map((digit, i) => (
                <div
                  key={i}
                  className="flex h-8 w-6 items-center justify-center rounded-md bg-white text-sm font-medium text-black sm:h-10 sm:w-8 sm:rounded-xl sm:text-base md:h-11 md:w-9 md:text-lg"
                >
                  {digit}
                </div>
              ))}
            </div>

            <span className=" mt-1 text-[10px] text-white sm:mt-2 sm:text-sm md:text-base">
              {item.label}
            </span>
          </div>

          {index < items.length - 1 && (
            <span className="mt-1 text-sm leading-7 text-white sm:text-lg sm:leading-9 md:leading-10">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default Countdown
