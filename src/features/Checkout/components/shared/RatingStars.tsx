import { Star } from "lucide-react";

interface RatingStarsProps {
  value: number;
  size?: number;
  interactive?: boolean;
  onChange?: (value: number) => void;
}

const RatingStars = ({
  value,
  size = 18,
  interactive = false,
  onChange,
}: RatingStarsProps) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= value;

        const icon = (
          <Star
            size={size}
            className={
              isActive
                ? "fill-app-gold text-app-gold"
                : "text-app-muted"
            }
          />
        );

        if (!interactive) {
          return (
            <span key={star}>
              {icon}
            </span>
          );
        }

        return (
          <button
            key={star}
            type="button"
            aria-label={`Rate ${star} stars`}
            onClick={() => onChange?.(star)}
            className="transition-opacity hover:opacity-70"
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;