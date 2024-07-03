import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useSwitchStyle = tv({
  slots: {
    container: 'w-10 rounded-2xl bg-switch-background p-0.5 outline-none ring-offset-1 ring-offset-background duration-300 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
    thumb: 'block size-5 rounded-full bg-switch-foreground shadow-sm duration-300 ease-switch data-[state=checked]:translate-x-4',
  },
  variants: {
    isInvalid: {
      false: {
        container: 'focus-visible:ring-ring data-[state=checked]:bg-primary',
      },
      true: {
        container: 'bg-destructive focus-visible:ring-destructive',
      },
    },
  },
})

export type SwitchStyleProps = VariantProps<typeof useSwitchStyle>
