import StoreCredit from '../components/StoreCredit'
import Membership from '../components/loyaltyRewards/Membership'
import Benefits from '../components/loyaltyRewards/Benefits'
import Coupons from '../components/loyaltyRewards/Coupons'
import ReferAFriend from '../components/loyaltyRewards/ReferAFriend'
import ProfileHeader from '../components/ProfileHeader'

export default function LoyaltyRewardsPage() {
  return (
    <div className="space-y-10">
      {/* =================================================
            Page Header
        ================================================= */}

      <ProfileHeader
        title="Loyalty & Rewards"
        description="Track your points, rewards, and membership benefits"
      />

      {/* =================================================
            Points Balance
        ================================================= */}
      <StoreCredit />

      {/* =================================================
            Membership Tier
        ================================================= */}
      <Membership />

      {/* =================================================
            Benefits
        ================================================= */}

      <Benefits />

      {/* =================================================
            Coupons
        ================================================= */}
      <Coupons />

      {/* =================================================
            Refer a Friend
        ================================================= */}

      <ReferAFriend />
    </div>
  )
}
