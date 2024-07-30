import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useAvatarStyle = tv({
  defaultVariants: {
    fallback: 'default',
    size: 'default',
  },
  slots: {
    fallback: 'flex size-full items-center justify-center font-medium',
    image: 'size-full rounded-[inherit] object-cover',
    root: 'inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle',
    size: 'aspect-square',
  },
  variants: {
    fallback: {
      default: { fallback: 'bg-primary text-primary-foreground' },
      ghost: { fallback: 'bg-transparent text-muted-foreground' },
      muted: { fallback: 'bg-muted-background text-muted-foreground' },
      secondary: { fallback: 'bg-secondary text-secondary-foreground' },
    },
    size: {
      default: { fallback: 'text-subtext', size: 'size-10' },
      full: { fallback: 'text-body', size: 'size-full' },
      lg: { fallback: 'text-body', size: 'size-12' },
      sm: { fallback: 'text-caption', size: 'size-8' },
      xl: { fallback: 'text-subtitle', size: 'size-16' },
      xxl: { fallback: 'text-title', size: 'size-32' },
    },
  },
})

export type AvatarStyleProps = VariantProps<typeof useAvatarStyle>
