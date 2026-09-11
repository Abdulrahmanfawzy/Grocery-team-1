import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  Icon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, Icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
            {label}
          </label>
        )}

        <div className="relative">
          {Icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground ">
              {Icon}
            </span>
          )}

          <input
            id={id}
            ref={ref}
            className={cn(
              'flex h-14 w-full rounded-sm border  border-gray-200 bg-background px-3 py-2 text-sm',
              'placeholder:text-muted-foreground placeholder:text-xs lg:placeholder:text-md',
              'focus-visible:outline-none focus-visible:border-app-main focus-visible:ring-1 focus-visible:ring-app-main',
              'disabled:cursor-not-allowed disabled:opacity-50',
              Icon && 'pl-10',
              error &&
                'border-destructive focus-visible:border-destructive focus-visible:ring-destructive',
              className,
            )}
            {...props}
          />
        </div>

        {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'
