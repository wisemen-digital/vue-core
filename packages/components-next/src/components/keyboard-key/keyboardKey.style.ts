import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createkeyboardKeyStyle = tv({
  slots: {
    key: new StyleBuilder()
      .withBase('text-center font-sans capitalize')
      .withBackgroundColor('dark:bg-secondary')
      .withFontSize('text-[0.6875rem]')
      .withColor('text-tertiary')
      .withSize('size-5')
      .withFlex('flex items-center justify-center')
      .withBorderRadius('rounded-xs')
      .withPadding('p-xs')
      .withShadow('shadow-keyboard-key')
      .build(),
  },
  variants: { variant: {} },
})

export type keyboardKeyStyle = VariantProps<typeof createkeyboardKeyStyle>
export type CreatekeyboardKeyStyle = ReturnType<typeof createkeyboardKeyStyle>
