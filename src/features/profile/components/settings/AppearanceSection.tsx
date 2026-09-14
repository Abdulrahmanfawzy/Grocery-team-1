import { Switch } from '@/components/ui/switch'
import { Sun } from 'lucide-react'
import { useState } from 'react'

export default function AppearanceSection() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <section className="rounded-md border  border-gray-200 py-8 bg-[#F7FBFD] p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-start gap-1.5">
          <Sun className="mt-1 text-foreground" size={18} />

          <div>
            <h2 className="text-md font-medium text-foreground">Dark Mode</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Switch between light and dark theme
            </p>
          </div>
        </div>

        <Switch checked={darkMode} onCheckedChange={setDarkMode} aria-label="Toggle dark mode" />
      </div>
    </section>
  )
}
