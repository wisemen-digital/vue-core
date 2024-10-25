import { tv } from '@/libs/twVariants.lib'

export const drawerStyle = tv({
  slots: {
    content: 'h-full rounded-drawer-border-radius-default border border-solid border-drawer-border-color-default bg-drawer-bg-color-default shadow-drawer-shadow-default',
    overlay: 'custom-drawer-overlay fixed inset-0 z-dialog-overlay bg-black/30 backdrop-blur-sm',
    wrapper: 'custom-popover-content fixed right-0 top-0 z-popover h-full p-drawer-padding-default outline-none',
  },
})
