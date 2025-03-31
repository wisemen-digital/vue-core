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
      .withSpacing('group-data-[layout=vertical]/form-field:mt-sm group-data-[layout=horizontal]/form-field:!mt-0')
      .build(),
    hint: new StyleBuilder()
      .withBase('inline-block')
      .withColor('text-tertiary')
      .withFontSize('text-sm')
      .withSpacing('group-data-[layout=vertical]/form-field:mt-sm group-data-[layout=horizontal]/form-field:!mt-0')
      .build(),
    label: new StyleBuilder()
      .withBase('inline-block')
      .withFontSize('text-sm')
      .withColor('text-secondary')
      .withFontWeight('font-medium')
      .build(),
    labelContainer: new StyleBuilder()
      .withBase('flex items-center justify-between')
      // Issue: When multiple nested groups have the same group name, the specificity of the styles is incorrect.
      // This causes the styles of the first (parent) group to be applied to the nested groups
      // instead of their intended styles. For now, we'll just use the ! flag to force the styles.
      .withSpacing('group-data-[layout=vertical]/form-field:mb-sm group-data-[layout=horizontal]/form-field:!mb-0')
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
