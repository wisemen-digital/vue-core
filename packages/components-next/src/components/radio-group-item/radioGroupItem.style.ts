import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createRadioGroupItemStyle = tv({
  slots: {
    indicator: new StyleBuilder()
      .withBase('block')
      .withColor('bg-white group-data-disabled/radio-group-item:bg-fg-disabled-subtle')
      .withSize('size-1.5')
      .withBorderRadius('rounded-full')
      .build(),
    root: new StyleBuilder()
      .withBase('group/radio-group-item relative overflow-hidden isolate outline-none')
      .withSize('size-4')
      .withFlex('flex items-center justify-center')
      .withBorder('border border-solid border-primary data-[state=checked]:border-brand-600 data-[state=checked]:disabled:border-disabled disabled:border-disabled data-invalid:data-[state=checked]:border-error data-invalid:data-[state=unchecked]:border-error')
      .withBorderRadius('rounded-full')
      .withBackgroundColor('data-[state=checked]:bg-brand-solid disabled:data-[state=checked]:bg-disabled-subtle disabled:bg-disabled-subtle data-invalid:data-[state=checked]:bg-error-solid')
      .withRing('ring-offset-1 focus-visible:ring-2 ring-brand-600')
      .withCursor('cursor-pointer disabled:cursor-not-allowed')
      .withTransition('duration-300')
      .build(),
  },
  variants: {
    variant: {},
  },
})

export type RadioGroupItemStyle = VariantProps<typeof createRadioGroupItemStyle>
export type CreateRadioGroupItemStyle = ReturnType<typeof createRadioGroupItemStyle>
