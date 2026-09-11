import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from 'cn'

const badgeVariants = cva(
  'rounded-tl-xl rounded-br-xl bg-linear-to-b from-app-main via-app-main/80 to-app-main/50 px-2 py-1 text-12 text-white',
)

function Badge({
  className,
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: 'span',

    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants(), className),
      },
      props,
    ),

    render,

    state: {
      slot: 'badge',
    },
  })
}

export { Badge }
