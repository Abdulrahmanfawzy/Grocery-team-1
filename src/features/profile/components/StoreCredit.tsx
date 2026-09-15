import { Button, Card, CardContent } from '@/components'
import { BadgePoundSterling } from 'lucide-react'

export default function StoreCredit() {
  return (
    <Card className="overflow-hidden py-5 rounded-md border-0 bg-app-main text-white shadow-sm">
      <CardContent className="flex  items-center justify-between p-6">
        <div>
          <p className="text-xs text-white/80">Your Points Balance</p>

          <h2 className="mt-1 text-2xl font-bold">2450</h2>

          <p className="text-xs text-white/70">≈ £24.50 in rewards</p>

          <Button
            size="sm"
            className="mt-4 h-8 bg-white px-4 text-xs font-medium text-app-main hover:bg-white/90"
          >
            Redeem Points
          </Button>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-app-main">
          <BadgePoundSterling className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  )
}
