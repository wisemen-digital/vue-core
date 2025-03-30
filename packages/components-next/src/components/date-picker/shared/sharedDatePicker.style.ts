import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createSharedDatePickerStyle = tv({
  slots: {
    date: new StyleBuilder()
      .withBase('group/date relative select-none isolate outline-none')
      .withFlex('flex items-center justify-center')
      .withFontSize('text-sm')
      .withColor('text-secondary data-selected:text-primary-on-brand data-outside-view:text-disabled')
      // Disabled
      .withColor('data-disabled:text-disabled')
      // Unavailable
      .withColor('data-unavailable:text-disabled')
      .withBackgroundColor('not-data-disabled:hover:bg-tertiary')
      .withCursor('cursor-pointer data-disabled:cursor-not-allowed')
      .withBorderRadius('rounded-full')
      .withSize('size-10')
      .withTransition('duration-200')
      .withRing('focus-visible:ring-2 ring-brand-500 data-selected:ring-offset-1')
      .build(),
    header: new StyleBuilder()
      .withGrid('grid grid-cols-3 items-center')
      .withSize('size-full')
      .build(),
    headerContainer: new StyleBuilder()
      .withFlex('flex justify-between gap-xl')
      .withMargin('mb-lg')
      .build(),
    todayIndicator: new StyleBuilder()
      .withBase('absolute bottom-1 left-1/2 -translate-x-1/2')
      .withSize('size-1')
      .withBorderRadius('rounded-full')
      .withBackgroundColor('bg-brand-solid group-data-selected/date:bg-white')
      .withTransition('duration-200')
      .build(),
    weekDayLabel: new StyleBuilder()
      .withFontWeight('font-medium')
      .withColor('text-secondary')
      .withFontSize('text-sm')
      .withSize('size-10')
      .withFlex('flex items-center justify-center')
      .build(),
  },
  variants: {
    variant: {},
  },
})

export type SharedDatePickerStyle = VariantProps<typeof createSharedDatePickerStyle>
export type CreateSharedDatePickerStyle = ReturnType<typeof createSharedDatePickerStyle>
