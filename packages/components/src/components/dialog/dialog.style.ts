import { tv } from '@/libs/twVariants.lib'

export const dialogStyle = tv({
  slots: {
    arrow: 'absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm border border-solid border-dialog-border-color-default bg-dialog-bg-color-default shadow-dialog-shadow-default',
    arrowBox: 'relative z-50 -mb-4 h-4 w-10 overflow-hidden',
    content: 'custom-popover-content fixed left-1/2 top-1/2 z-popover -translate-x-1/2 -translate-y-1/2 rounded-dialog-border-radius-default border border-solid border-dialog-border-color-default bg-dialog-bg-color-default shadow-dialog-shadow-default outline-none',
    overlay: 'custom-dialog-overlay fixed inset-0 z-dialog-overlay bg-black/30 backdrop-blur-sm',
  },
})
