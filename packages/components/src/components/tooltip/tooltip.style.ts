import { tv } from '@/libs/twVariants.lib'

export const tooltipStyle = tv({
  slots: {
    arrow: 'absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm border border-solid border-tooltip-border-color-default bg-tooltip-bg-color-default shadow-tooltip-shadow-default',
    arrowBox: 'relative z-50 -mb-4 h-4 w-10 overflow-hidden',
    content: 'custom-z-popover custom-popover-content rounded-tooltip-border-radius-default border border-solid border-tooltip-border-color-default bg-tooltip-bg-color-default shadow-tooltip-shadow-default',
  },
})
