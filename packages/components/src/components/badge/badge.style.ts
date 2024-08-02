import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useBadgeStyle = tv({
  defaultVariants: {
    rounded: false,
  },
  slots: {
    badge: '',
  },
  variants: {
    rounded: {
      false: {
        badge: 'rounded-md',
      },
      true: {
        badge: 'rounded-full',
      },
    },
    unstyled: {
      false: {
        badge: 'border border-solid px-1 py-0.5 shadow-sm',
      },
    },
    variant: {
      default: {
        badge: 'border-border',
      },
      destructive: {
        badge: 'border-destructive bg-destructive/20 text-destructive',
      },
      primary: {
        badge: 'border-primary bg-primary/20 text-primary',
      },
      secondary: {
        badge: 'border-secondary bg-secondary/20 text-secondary-foreground',
      },
      success: {
        badge: 'bg-success/20 text-success',
      },
      warning: {
        badge: 'bg-warning/20 text-warning',
      },
    },
  },
})

export type BadgeStyleProps = VariantProps<typeof useBadgeStyle>
