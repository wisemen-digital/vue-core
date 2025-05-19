import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const createTextEditorStyle = tv({
  slots: { root: '' },
  variants: { variant: {} },
})

export type TextEditorStyle = VariantProps<typeof createTextEditorStyle>
export type CreateTextEditorStyle = ReturnType<typeof createTextEditorStyle>
