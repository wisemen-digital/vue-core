import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useFormLabelStyle = tv({
  slots: {
    label: 'text-sm duration-200',
  },
  variants: {
    isInvalid: {
      false: {
        label: 'text-muted-foreground',
      },
      true: {
        label: 'text-destructive',
      },
    },
    isDisabled: {
      true: {
        label: 'opacity-50',
      },
    },
  },
})

export type FormLabelStyleProps = VariantProps<typeof useFormLabelStyle>
