import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const usePopoverStyle = tv({
  slots: {
    arrow: 'absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm bg-popover shadow-popover-shadow',
    arrowContainer: 'relative z-50 -mb-4 h-4 w-10 overflow-hidden',
    closeButtonContainer: '!absolute right-0 top-0',
    content: 'custom-popover-content z-popover rounded-popover bg-popover shadow-popover-shadow',
  },
})

export type PopoverStyleProps = VariantProps<typeof usePopoverStyle>
