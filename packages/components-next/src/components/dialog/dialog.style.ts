import { tv, type VariantProps } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/styleBuilder.util'

export const createDialogStyle = tv({
  slots: {
    closeButton: '',
    content: new StyleBuilder()
      .withClasses('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 outline-none overflow-hidden')
      .withZIndex('z-40')
      .withBorderRadius('rounded-lg')
      .withBorder('border border-solid border-tertiary')
      .withBackgroundColor('bg-primary')
      .withShadow('shadow-lg')
      .build(),
    overlay: new StyleBuilder()
      .withClasses('fixed inset-0 bg-black/30 backdrop-blur-sm')
      .withZIndex('z-39')
      .build(),
  },
})

export type DialogStyle = VariantProps<typeof createDialogStyle>
export type CreateDialogStyle = ReturnType<typeof createDialogStyle>
