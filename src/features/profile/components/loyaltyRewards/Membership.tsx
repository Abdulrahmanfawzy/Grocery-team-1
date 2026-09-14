import { Card, CardContent } from '@/components'
import { Award } from 'lucide-react'

export default function Membership() {
  type MembershipTier = {
    name: string
    points: number
  }

  const membershipTiers: MembershipTier[] = [
    {
      name: 'Bronze',
      points: 1000,
    },
    {
      name: 'Silver',
      points: 2500,
    },
    {
      name: 'Gold',
      points: 5000,
    },
    {
      name: 'Platinum',
      points: 10000,
    },
  ]
  const currentPoints = 2450
  const platinumPoints = 10000

  const pointsToNextTier = 2500 - currentPoints
  return (
    <Card className="rounded-md shadow-none border-slate-300 bg-[#f7fbfd] ">
      <CardContent className="p-5">
        {/* Tier Header */}

        <div className="mb-4 flex items-center gap-2">
          <Award size={19} className=" text-app-main" />

          <p className="text-md font-medium text-slate-700">Membership Tier: Gold</p>
        </div>

        {/* Progress Header */}

        <div className="mb-1 flex items-center justify-between gap-3 pl-6">
          <p className="text-sm font-medium text-app-main">Progress to Platinum</p>

          <p className="whitespace-nowrap text-sm font-medium text-slate-700 sm:text-sm">
            {currentPoints.toLocaleString()} / {platinumPoints.toLocaleString()} pts
          </p>
        </div>

        {/* Progress */}

        <div className="pl-6">
          {/* <Progress value={progress} className="h-2 bg-slate-200" /> */}
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-linear-to-r from-gray-100 from-7% via-[#47768F] via-30% to-[#014162] to-90%"
              style={{
                width: `${25}%`,
              }}
            />
          </div>
          <p className="mt-1 text-[12px] text-slate-400">{pointsToNextTier} points to go</p>
        </div>

        {/* Membership Tiers */}

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:pl-6">
          {membershipTiers.map((tier) => {
            const isActive = tier.name === 'Gold'

            return (
              <button
                key={tier.name}
                type="button"
                className={`
                        relative flex min-h-17.5 flex-col items-center justify-center
                        rounded-md border px-2 py-3 text-center transition-all
                        ${
                          isActive
                            ? 'border-app-main bg-app-main text-white shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-app-main/40 hover:bg-slate-50'
                        }
                      `}
              >
                <span className="flex items-center gap-1 text-md font-medium">
                  {tier.name}

                  {isActive && <Award className="h-3 w-3" />}
                </span>

                <span className={`mt-1 text-xs ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                  {tier.points.toLocaleString()} pts
                </span>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
