import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'

const languages = [
  {
    label: 'English (US)',
    value: 'english',
  },
  {
    label: 'العربية',
    value: 'arabic',
  },
  {
    label: 'France',
    value: 'france',
  },
]

export default function LanguageSection({ bg }: { bg: string }) {
  return (
    <section className={`bg-[${bg}] rounded-md border border-slate-200  p-4 font-inter `}>
      <h2 className="text-md font-semibold text-foreground">Language</h2>

      <div className="mt-3">
        <p className="mb-1.5 text-xs font-medium text-muted-foreground">Preferred Language</p>

        <Select defaultValue="english">
          <SelectTrigger
            className="
              h-10!
              w-40
              rounded-md
              border-slate-200
              bg-white
              text-sm
              text-slate-700
              shadow-none
              focus:ring-1
              focus:ring-app-main/20
            "
          >
            <SelectValue placeholder="Select language" />
          </SelectTrigger>

          <SelectContent className="font-inter">
            {languages.map((language) => (
              <SelectItem key={language.value} value={language.value} className="text-sm">
                {language.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
