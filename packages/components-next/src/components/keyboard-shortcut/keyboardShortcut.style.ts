import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createkeyboardShortcutStyle = tv({
  slots: {
    root: new StyleBuilder()
      .withFlex('flex items-center gap-x-1')
      .build(),
    thenLabel: new StyleBuilder()
      .withBase('font-regular')
      .withFontSize('text-xs')
      .withColor('text-tertiary')
      .build(),
  },
  variants: { variant: {} },
})

export type keyboardShortcutStyle = VariantProps<typeof createkeyboardShortcutStyle>
export type CreatekeyboardShortcutStyle = ReturnType<typeof createkeyboardShortcutStyle>
