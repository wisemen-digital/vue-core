import { tv } from '@/libs/twVariants.lib'
import { StyleBuilder } from '@/utils/style.util'

export const useTooltipStyle = tv({
  slots: {
    arrow: new StyleBuilder()
      .withClasses('absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-xxs')
      .withBorderRadius('rounded-(--tooltip-border-radius-default)')
      .withBorder('border border-solid border-(--tooltip-border-color-default)')
      .withBackgroundColor('bg-(--tooltip-bg-color-default)')
      .withShadow('shadow-(--tooltip-shadow-default)')
      .build(),
    arrowBox: new StyleBuilder()
      .withClasses('relative z-50 -mb-4 h-4 w-10 overflow-hidden')
      .build(),
    content: new StyleBuilder()
      .withClasses('custom-popover-content z-popover')
      .withBorderRadius('rounded-(--tooltip-border-radius-default)')
      .withBorder('border border-solid border-(--tooltip-border-color-default)')
      .withBackgroundColor('bg-(--tooltip-bg-color-default)')
      .withShadow('shadow-(--tooltip-shadow-default)')
      .build(),
  },
})
