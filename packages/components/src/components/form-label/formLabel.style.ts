import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useFormLabelStyle = tv({
  slots: {
    label: 'text-subtext font-form-label duration-200',
    tooltip: 'duration-200',
  },
  variants: {
    isInvalid: {
      false: {
        label: 'text-form-label-foreground',
        tooltip: 'text-form-label-foreground',
      },
      true: {
        label: 'text-destructive',
        tooltip: 'text-destructive',
      },
    },
    isDisabled: {
      true: {
        label: 'opacity-50',
        tooltip: 'opacity-50',
      },
    },
  },
})

export type FormLabelStyleProps = VariantProps<typeof useFormLabelStyle>
