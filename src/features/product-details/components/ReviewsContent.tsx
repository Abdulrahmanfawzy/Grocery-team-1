import { Star, User } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import type { ProductsResponse } from '@/types/products.type'
const ReviewsContent = ({ reviews }: { reviews: ProductsResponse['data'][0]['ratings'] }) => {
  return (
    <div className="space-y-3">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="flex items-start gap-3">
            <Avatar className="size-15 shrink-0">
              {review.user.avatar ? (
                <AvatarImage
                  src={review.user.avatar}
                  alt={review.user.name}
                  className={'rounded-lg'}
                />
              ) : (
                <div className="flex justify-center w-full h-full items-center">
                  <User className={'rounded-lg size-8 text-gray-600'} />
                </div>
              )}
            </Avatar>

            <div>
              <h3 className="text-12 font-normal text-black">{review.user.name}</h3>

              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={
                        star <= review.stars ? 'size-4 fill-gold text-gold' : 'size-4 text-silver'
                      }
                    />
                  ))}
                </div>

                <span className="text-base text-muted-foreground">({review.stars}/5)</span>
              </div>
              {review.created_at && (
                <p className="text-12  font-normal text-silver">Reviewed in {review.created_at}</p>
              )}

              <p className="text-12 text-black font-normal">{review.comment}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ReviewsContent
