import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useAvatarStyle = tv({
  defaultVariants: {
    fallback: 'default',
  },
  slots: {
    fallback: 'flex size-full items-center justify-center text-[15px] font-medium',
  },
  variants: {
    fallback: {
      default: { fallback: 'bg-primary text-primary-foreground' },
      ghost: { fallback: 'bg-transparent text-muted-foreground' },
      muted: { fallback: 'bg-muted-background text-muted-foreground' },
      secondary: { fallback: 'bg-secondary text-secondary-foreground' },
    },
  },
})

export type AvatarStyleProps = VariantProps<typeof useAvatarStyle>
