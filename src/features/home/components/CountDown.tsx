import { useEffect, useState } from 'react'

const INITIAL_SECONDS = 10 * 60 * 60 + 56 * 60 + 21

function formatTime(value: number) {
  const hours = Math.floor(value / 3600).toString().padStart(2, '0')
  const minutes = Math.floor((value % 3600) / 60).toString().padStart(2, '0')
  const seconds = Math.floor(value % 60).toString().padStart(2, '0')
  return `${hours} : ${minutes} : ${seconds}`
}

export function Countdown() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((current) => (current > 0 ? current - 1 : INITIAL_SECONDS))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 rounded bg-[#ff665d] px-2.5 py-1.5 text-[10px] font-medium text-white sm:text-xs">
      <span>Expires in:</span>
      <span>{formatTime(seconds)}</span>
    </div>
  )
}
