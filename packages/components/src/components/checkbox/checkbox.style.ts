import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useCheckboxStyle = tv({
  defaultVariants: {},
  slots: {
    container: 'flex items-center gap-x-2',
    groupContainer: 'flex flex-col gap-y-2',
    indicator: 'text-primary-foreground',
    root: 'flex size-5 items-center justify-center rounded border-[1.5px] border-solid outline-none ring-offset-1 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
  },
  variants: {
    isInvalid: {
      false: {
        root: 'border-input-border focus-visible:ring-ring data-[state=checked]:border-primary data-[state=checked]:bg-primary',
      },
      true: {
        root: 'border-destructive focus-visible:ring-destructive data-[state=checked]:border-destructive data-[state=checked]:bg-destructive',
      },
    },
  },
})

export type CheckboxStyleProps = VariantProps<typeof useCheckboxStyle>
