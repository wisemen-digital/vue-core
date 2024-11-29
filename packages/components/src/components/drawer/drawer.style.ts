import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useDrawerStyle = tv({
  slots: {
    content: new StyleBuilder()
      .withClasses('custom-popover-content fixed right-0 top-0 z-popover h-full outline-none')
      .withPadding('drawer-(--padding-default)')
      .withBorderRadius('drawer-(--border-radius-default)')
      .withBorder('border-solid border-drawer-border-color-default')
      .withBackgroundColor('bg-drawer-bg-color-default')
      .withShadow('drawer-shadow-default')
      .build(),
    overlay: new StyleBuilder()
      .withClasses('custom-drawer-overlay fixed inset-0 z-dialog-overlay bg-black/30')
      .build(),
    wrapper: new StyleBuilder()
      .withClasses('custom-popover-content fixed right-0 top-0 z-popover h-full outline-none')
      .withPadding('drawer-(--padding-default)')
      .withBorderRadius('drawer-(--border-radius-default)')
      .withBorder('border-solid border-drawer-border-color-default')
      .withBackgroundColor('bg-drawer-bg-color-default')
      .withShadow('drawer-shadow-default')
      .build(),
  },
})
