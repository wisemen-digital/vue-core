import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useFormErrorStyle = tv({
  slots: {
    container: 'flex items-center gap-x-2',
    icon: 'shrink-0 text-destructive',
    text: 'text-destructive',
  },
})

export type FormErrorStyleProps = VariantProps<typeof useFormErrorStyle>
