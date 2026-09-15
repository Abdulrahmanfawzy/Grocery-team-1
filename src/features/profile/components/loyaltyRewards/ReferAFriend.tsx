import { Button, Card, CardContent } from '@/components'
import { Share2 } from 'lucide-react'

export default function ReferAFriend() {
  return (
    <Card className="overflow-hidden py-6 rounded-md border-0 bg-app-main  shadow-none">
      <CardContent className="p-5">
        <div className="flex flex-col gap-4 ">
          {/* Text */}

          <div>
            <h2 className="text-md font-medium text-gray-50">Refer a Friend</h2>

            <p className="mt-1 max-w-md text-xxs leading-4 text-white/75">
              Give £10, Get £10. Share your referral code and both earn rewards!
            </p>
          </div>

          {/* Referral */}

          <div className="flex items-center justify-between flex-wrap gap-2 ">
            <Button variant={'outline'} size="sm" className="h-8 w-fit">
              Your Code:
              <span className="ml-1 font-bold text-app-main">Your Code: SARAH2024</span>
            </Button>

            <Button variant={'outline'} size="sm" className="h-8 w-fit">
              <Share2 size={18} className="mr-1.5 " />
              Share Code
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
