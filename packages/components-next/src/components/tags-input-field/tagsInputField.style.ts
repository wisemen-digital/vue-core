import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createTagsInputFieldStyle = tv({
  slots: {
    input: new StyleBuilder()
      .withBase('focus:outline-none')
      .withFlex('flex-1')
      .withBackgroundColor('bg-transparent')
      .withPadding('px-sm')
      .withFontSize('text-sm')
      .withColor('disabled:text-disabled placeholder:text-placeholder')
      .withCursor('disabled:cursor-not-allowed')
      .build(),
    root: new StyleBuilder()
      .withBase('group/tags-input-field overflow-hidden')
      .withPadding('p-md py-sm not-data-empty:px-sm')
      .withSize('w-full min-h-10')
      .withFlex('flex flex-wrap items-center gap-sm')
      // Default
      .withBorder('border border-solid border-primary focus-within:border-brand-500')
      // Disabled
      .withBorder('data-disabled:border-disabled-subtle')
      // Invalid
      .withBorder('data-invalid:border-error data-invalid:focus-within:border-error')
      .withBackgroundColor('bg-primary data-disabled:bg-disabled-subtle')
      .withBorderRadius('rounded-md')
      .withShadow('shadow-xs')
      .withOutline('outline outline-transparent focus-within:outline-brand-500 focus-within:data-invalid:outline-error-500')
      .withTransition('transition-colors duration-200')
      .withCursor('data-disabled:cursor-not-allowed')
      .build(),
  },
  variants: {
    variant: {},
  },
})

export type TagsInputFieldStyle = VariantProps<typeof createTagsInputFieldStyle>
export type CreateTagsInputFieldStyle = ReturnType<typeof createTagsInputFieldStyle>

// class="
//       flex max-h-50 w-full flex-wrap items-center gap-sm overflow-y-auto
//       rounded-lg border border-primary bg-primary px-sm py-xxs shadow-xs
//     "
