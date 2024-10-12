import { tv } from '@/libs/twVariants.lib'

export const popoverStyle = tv({
  slots: {
    arrow: 'absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm border border-solid border-popover-border-color-default bg-popover-bg-color-default shadow-popover-shadow-default',
    arrowBox: 'relative z-50 -mb-4 h-4 w-10 overflow-hidden',
    content: 'z-popover custom-popover-content min-w-popover-min-width-default max-w-popover-max-width-default rounded-popover-border-radius-default border border-solid border-popover-border-color-default bg-popover-bg-color-default shadow-popover-shadow-default',
  },
})
