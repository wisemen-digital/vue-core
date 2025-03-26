import { tv, type VariantProps } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/styleBuilder.util'

export const createTooltipStyle = tv({
  slots: {
    arrow: new StyleBuilder()
      .withClasses('absolute left-1/2 rotate-45')
      .withSize('size-4')
      .withTranslate('-translate-x-1/2 -translate-y-3')
      .withBorderRadius('rounded-xxs')
      .withBackgroundColor('bg-primary')
      .withBorder('border border-solid border-secondary')
      .withShadow('shadow-lg')
      .build(),
    content: new StyleBuilder()
      .withBackgroundColor('bg-primary')
      .withBorder('border border-solid border-secondary')
      .withBorderRadius('rounded-lg')
      .withBase('relative overflow-hidden')
      .withSize('size-full')
      .withBorderRadius('rounded-lg')
      .withShadow('shadow-lg')
      .build(),
  },
})

export type TooltipStyle = VariantProps<typeof createTooltipStyle>
export type CreateTooltipStyle = ReturnType<typeof createTooltipStyle>
