import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useFormGroupStyle = tv({
  slots: {
    group: 'flex flex-col gap-y-0.5',
  },
})

export type FormGroupStyleProps = VariantProps<typeof useFormGroupStyle>
