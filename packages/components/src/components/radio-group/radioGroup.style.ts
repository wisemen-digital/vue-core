import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useRadioGroupStyle = tv({
  slots: {
    container: 'flex flex-col gap-y-2',
    item: 'text-left outline-none ring-offset-1 ring-offset-background duration-200 focus:border-primary focus-visible:ring-2 focus-visible:ring-ring',
    itemIndicator: 'block size-2 rounded-full bg-primary',
    itemText: 'text-subtext text-secondary-foreground',
    itemWrapper: 'flex size-5 items-center justify-center gap-x-2 rounded-full border-[1.5px] border-solid border-input-border data-[state=checked]:border-primary',
    itemsContainer: 'flex items-center gap-x-2',
  },
})

export type RadioGroupStyleProps = VariantProps<typeof useRadioGroupStyle>
