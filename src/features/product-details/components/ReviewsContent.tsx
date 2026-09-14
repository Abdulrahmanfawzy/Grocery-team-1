import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AvatarImg from '@/assets/images/avatar.jpg'
const ReviewsContent = () => {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4].map(() => {
        return (
          <div className="flex items-start gap-3">
            <Avatar className="size-15 shrink-0">
              <AvatarImage src={AvatarImg} alt="Alaa Bassel" className={'rounded-lg'} />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>

            <div>
              <h3 className="text-12 font-normal text-black">Alaa Bassel</h3>

              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="size-5 fill-gold text-gold" />
                  ))}
                </div>

                <span className="text-base text-muted-foreground">(5/5)</span>
              </div>

              <p className="text-12  font-normal text-silver">Reviewed in 9th of December 2025</p>

              <p className="text-12 text-black font-normal">
                Super fresh and flavorful-arrived perfectly ripe.
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ReviewsContent
