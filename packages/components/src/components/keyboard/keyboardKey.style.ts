import type { VariantProps } from '@/libs/cva.lib'
import { cva } from '@/libs/cva.lib'

export const keyboardKey = cva({
  base: 'flex h-[1.1rem] min-w-[1.1rem] items-center justify-center rounded border border-solid p-1 text-center text-[11px] capitalize',
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      bordered:
        'border-border bg-muted-background text-muted-foreground',
      default:
        'border-muted-background bg-muted-background text-secondary-foreground',
      ghost:
        'border-transparent text-muted-foreground',
      secondary:
        'border-primary-foreground/0 bg-primary-foreground/20 text-primary-foreground',
    },
  },
})

export type KeyboardKeyStyleProps = VariantProps<typeof keyboardKey>
