import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createTimeFieldStyle = tv({
  slots: {
    iconLeft: new StyleBuilder()
      .withBase('shrink-0')
      .withSize('size-4.5')
      .withSpacing('ml-3')
      .withColor('text-quaternary group-data-disabled/time-field:text-fg-disabled')
      .build(),
    iconRight: new StyleBuilder()
      .withBase('shrink-0')
      .withSize('size-4.5')
      .withSpacing('mr-3')
      .withColor('text-quaternary group-data-disabled/time-field:text-fg-disabled')
      .build(),
    input: new StyleBuilder()
      .withBase('outline-none')
      .withFontSize('text-sm')
      .withBackgroundColor('focus:bg-quaternary')
      .withPadding('px-0.5 data-[segment=literal]:px-0')
      .withBorderRadius('rounded-xs')
      .withColor('text-primary data-placeholder:text-placeholder data-[segment=literal]:text-placeholder group-data-disabled/time-field:text-disabled')
      .withCursor('disabled:cursor-not-allowed')
      .withTransition('duration-200')
      .build(),
    inputs: new StyleBuilder()
      .withFlex('flex items-center')
      .withSize('size-full')
      .withPadding('pl-3 pr-2 group-data-icon-left/time-field:pl-2')
      .withBackgroundColor('group-data-disabled/time-field:bg-disabled-subtle')
      .build(),
    loader: new StyleBuilder()
      .withBase('shrink-0')
      .withSpacing('mr-3')
      .withSize('size-4')
      .withColor('text-quaternary')
      .build(),
    root: new StyleBuilder()
      .withBase('group/time-field overflow-hidden')
      .withFlex('flex items-center')
      .withHeight('h-10')
      // Default
      .withBorder('border border-solid border-primary focus-within:border-brand-500')
      // Disabled
      .withBorder('data-disabled:border-disabled-subtle')
      // Invalid
      .withBorder('data-invalid:border-error data-invalid:focus-within:border-error')
      .withBackgroundColor('bg-primary data-disabled:bg-disabled-subtle')
      .withBorderRadius('rounded-md')
      .withShadow('shadow-xs')
      .withRing('ring-brand-500 focus-within:ring data-invalid:ring-error-500')
      .withTransition('duration-200')
      .withCursor('data-disabled:cursor-not-allowed')
      .build(),
  },
  variants: { variant: {} },
})

export type TimeFieldStyle = VariantProps<typeof createTimeFieldStyle>
export type CreateTimeFieldStyle = ReturnType<typeof createTimeFieldStyle>
