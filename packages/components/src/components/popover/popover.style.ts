import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const usePopoverStyle = tv({
  slots: {
    arrow: new StyleBuilder()
      .withClasses('absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-xxs')
      .withBorderRadius('rounded-(--popover-border-radius-default)')
      .withBorder('border border-solid border-(--popover-border-color-default)')
      .withBackgroundColor('bg-(--popover-bg-color-default)')
      .withShadow('shadow-(--popover-shadow-default)')
      .build(),
    arrowBox: new StyleBuilder()
      .withClasses('relative z-50 -mb-4 h-4 w-10 overflow-hidden')
      .build(),
    content: new StyleBuilder()
      .withClasses('popper-content z-popover')
      .withSize('min-w-(--popover-min-width-default) max-w-(--popover-max-width-default)')
      .withBorderRadius('rounded-(--popover-border-radius-default)')
      .withBorder('border border-solid border-(--popover-border-color-default)')
      .withBackgroundColor('bg-(--popover-bg-color-default)')
      .withShadow('shadow-(--popover-shadow-default)')
      .build(),
  },
  variants: {
    width: {
      '': {},
      'anchor-width': {
        content: new StyleBuilder()
          .withSize('w-(--reka-popover-trigger-width)')
          .build(),
      },
      'available-width': {
        content: new StyleBuilder()
          .withSize('w-(--reka-popover-content-available-width)')
          .build(),
      },
    },
  },
})
