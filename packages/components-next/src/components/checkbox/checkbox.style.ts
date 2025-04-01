import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createCheckboxStyle = tv({
  slots: {
    indicator: new StyleBuilder()
      .withBase('block')
      .withColor('text-primary-on-brand group-data-disabled/checkbox:text-fg-disabled-subtle')
      .withSize('size-3')
      .build(),
    root: new StyleBuilder()
      .withBase('group/checkbox relative overflow-hidden isolate outline-none')
      .withSize('size-4')
      .withFlex('flex items-center justify-center')
      .withBorder('border border-solid border-primary data-[state=checked]:border-brand-600 data-[state=checked]:disabled:border-disabled disabled:border-disabled')
      // Error
      .withBorder('data-invalid:data-[state=checked]:border-error data-invalid:data-[state=unchecked]:border-error')
      .withBorderRadius('rounded-xs')
      .withBackgroundColor('data-[state=checked]:bg-brand-solid disabled:data-[state=checked]:bg-disabled-subtle disabled:bg-disabled-subtle')
      // Error
      .withBackgroundColor('data-invalid:data-[state=checked]:bg-error-solid')
      .withRing('ring-offset-1 focus-visible:ring-2 ring-brand-600 data-invalid:ring-error-600')
      .withCursor('cursor-pointer disabled:cursor-not-allowed')
      .withTransition('duration-300')
      .build(),
  },
  variants: {
    variant: {},
  },
})

export type CheckboxStyle = VariantProps<typeof createCheckboxStyle>
export type CreateCheckboxStyle = ReturnType<typeof createCheckboxStyle>
