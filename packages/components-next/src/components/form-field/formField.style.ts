import { tv, type VariantProps } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/styleBuilder.util'

export const createFormFieldStyle = tv({
  slots: {
    asterisk: new StyleBuilder()
      .withColor('text-error-primary')
      .build(),
    error: new StyleBuilder()
      .withBase('inline-block')
      .withColor('text-error-primary')
      .withFontSize('text-sm')
      .withFontWeight('font-medium')
      .withSpacing('mt-sm')
      .build(),
    hint: new StyleBuilder()
      .withBase('inline-block')
      .withColor('text-tertiary')
      .withFontSize('text-sm')
      .withSpacing('mt-sm')
      .build(),
    label: new StyleBuilder()
      .withBase('inline-block')
      .withFontSize('text-sm')
      .withColor('text-secondary')
      .withFontWeight('font-medium')
      .build(),
    labelContainer: new StyleBuilder()
      .withBase('flex items-center justify-between')
      .withSpacing('mb-sm')
      .build(),
  },
})

export type FormFieldStyle = VariantProps<typeof createFormFieldStyle>
export type CreateFormFieldStyle = ReturnType<typeof createFormFieldStyle>
