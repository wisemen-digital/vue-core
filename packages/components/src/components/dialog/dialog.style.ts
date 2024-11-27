import { tv } from '@/libs/twVariants.lib'

export const dialogStyle = tv({
  slots: {
    content: 'custom-popover-content fixed left-1/2 top-1/2 z-popover -translate-x-1/2 -translate-y-1/2 rounded-dialog-border-radius-default border border-solid border-dialog-border-color-default bg-dialog-bg-color-default shadow-dialog-shadow-default outline-none',
    overlay: 'custom-dialog-overlay fixed inset-0 z-dialog-overlay bg-black/30',
  },
})
