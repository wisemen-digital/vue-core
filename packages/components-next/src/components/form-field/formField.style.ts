import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

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
      .withSpacing('group-data-[layout=vertical]/form-field:mt-sm')
      .build(),
    hint: new StyleBuilder()
      .withBase('inline-block')
      .withColor('text-tertiary')
      .withFontSize('text-sm')
      .withSpacing('group-data-[layout=vertical]/form-field:mt-sm')
      .build(),
    label: new StyleBuilder()
      .withBase('inline-block')
      .withFontSize('text-sm')
      .withColor('text-secondary')
      .withFontWeight('font-medium')
      .build(),
    labelContainer: new StyleBuilder()
      .withBase('flex items-center justify-between')
      .withSpacing('group-data-[layout=vertical]/form-field:mb-sm')
      .build(),
    root: new StyleBuilder()
      .withBase('group/form-field')
      .withGrid('data-[layout=horizontal]:grid data-[layout=horizontal]:grid-cols-[auto_auto] gap-x-md items-center justify-start')
      .build(),
  },
  variants: {
    variant: {},
  },
})

export type FormFieldStyle = VariantProps<typeof createFormFieldStyle>
export type CreateFormFieldStyle = ReturnType<typeof createFormFieldStyle>
