import { tv, type VariantProps } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/styleBuilder.util'

export const createTextFieldStyle = tv({
  slots: {
    iconLeft: new StyleBuilder()
      .withBase('shrink-0')
      .withSize('size-4.5')
      .withSpacing('ml-3')
      .withColor('text-quaternary group-data-[is-disabled=true]/text-field:text-fg-disabled')
      .build(),
    iconRight: new StyleBuilder()
      .withBase('shrink-0')
      .withSize('size-4.5')
      .withSpacing('mr-3')
      .withColor('text-quaternary group-data-[is-disabled=true]/text-field:text-fg-disabled')
      .build(),
    input: new StyleBuilder()
      .withBase('outline-none')
      .withSize('size-full')
      .withFontSize('text-sm')
      .withPadding('px-3 group-data-[has-icon-left=true]/text-field:pl-2 group-data-[has-icon-right=true]/text-field:pr-2')
      .withColor('text-primary disabled:text-disabled placeholder:text-placeholder')
      .withBackgroundColor('bg-transparent')
      .withCursor('disabled:cursor-not-allowed')
      .build(),
    loader: new StyleBuilder()
      .withBase('shrink-0')
      .withSpacing('mr-3')
      .withSize('size-4')
      .withColor('text-quaternary')
      .build(),
    root: new StyleBuilder()
      .withBase('group/text-field overflow-hidden')
      .withFlex('flex items-center')
      .withHeight('h-10')
      // Default
      .withBorder('border border-solid border-primary focus-within:border-brand-500')
      // Disabled
      .withBorder('data-[is-disabled=true]:border-disabled-subtle')
      // Invalid
      .withBorder('data-[is-invalid=true]:border-error data-[is-invalid=true]:focus-within:border-error')
      .withBackgroundColor('bg-primary data-[is-disabled=true]:bg-disabled-subtle')
      .withBorderRadius('rounded-md')
      .withShadow('shadow-xs')
      .withRing('ring-brand-500 focus-within:ring data-[is-invalid=true]:ring-error-500')
      .withTransition('duration-200')
      .withCursor('data-[is-disabled=true]:cursor-not-allowed')
      .build(),
  },
})

export type TextFieldStyle = VariantProps<typeof createTextFieldStyle>
export type CreateTextFieldStyle = ReturnType<typeof createTextFieldStyle>
