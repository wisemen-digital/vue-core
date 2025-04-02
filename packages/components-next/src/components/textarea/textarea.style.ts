import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createTextareaStyle = tv({
  slots: {
    input: new StyleBuilder()
      .withBase('outline-none group-data-[resize=none]/textarea:resize-none group-data-[resize=vertical]/textarea:resize-y group-data-[resize=horizontal]/textarea:resize-x group-data-[resize=both]/textarea:resize group-data-[resize=auto-vertical]/textarea:resize-none')
      .withSize('size-full')
      .withFontSize('text-sm')
      .withPadding('p-lg')
      .withColor('text-primary disabled:text-disabled placeholder:text-placeholder')
      .withBackgroundColor('bg-transparent')
      .withCursor('disabled:cursor-not-allowed')
      .build(),
    root: new StyleBuilder()
      .withBase('group/textarea overflow-hidden')
      .withSize('data-[resize=none]:size-full data-[resize=vertical]:size-full data-[resize=auto-vertical]:size-full data-[resize=horizontal]:h-full data-[resize=both]:h-full')
      .withFlex('inline-flex flex-col')
      // Default
      .withBorder('border border-solid border-primary focus-within:border-brand-500')
      // Disabled
      .withBorder('data-[disabled=true]:border-disabled-subtle')
      // Invalid
      .withBorder('data-[invalid=true]:border-error data-[invalid=true]:focus-within:border-error')
      .withBackgroundColor('bg-primary data-[disabled=true]:bg-disabled-subtle')
      .withBorderRadius('rounded-md')
      .withShadow('shadow-xs')
      .withRing('ring-brand-500 focus-within:ring data-[invalid=true]:ring-error-500')
      .withTransition('duration-200')
      .withCursor('data-[disabled=true]:cursor-not-allowed')
      .build(),
  },
  variants: { variant: {} },
})

export type TextareaStyle = VariantProps<typeof createTextareaStyle>
export type CreateTextareaStyle = ReturnType<typeof createTextareaStyle>
