import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useContainerStyle = tv({
  slots: {
    base: 'container mx-auto flex flex-col px-8',
  },
})

export type ContainerStyleProps = VariantProps<typeof useContainerStyle>
