import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { createSharedDatePickerStyle } from '@/components/date-picker/shared/sharedDatePicker.style'
import { StyleBuilder } from '@/utils/style-builder/styleBuilder.util'

export const createDateRangePickerStyle = tv({
  extend: createSharedDatePickerStyle,
  slots: {
    date: new StyleBuilder()
      .withBackgroundColor(`
      not-data-disabled:data-highlighted:bg-brand-secondary
      data-selected:bg-brand-secondary
      data-selected:hover:bg-brand-200 dark:data-selected:hover:bg-brand-700

      not-data-disabled:data-highlighted-start:bg-brand-solid
      data-selection-start:bg-brand-solid
      data-selection-start:hover:bg-brand-solid-hover

      not-data-disabled:data-highlighted-end:bg-brand-solid
      data-selection-end:bg-brand-solid
      data-selection-end:hover:bg-brand-solid-hover
      `)
      .withColor(`
      data-selected:text-primary
      data-highlighted:text-primary

      not-data-disabled:data-highlighted-start:text-primary-on-brand
      data-selection-start:text-primary-on-brand
      data-selection-start:hover:text-primary-on-brand

      not-data-disabled:data-highlighted-end:text-primary-on-brand
      data-selection-end:text-primary-on-brand
      data-selection-end:hover:text-primary-on-brand
      `)
      .build(),
    header: '',
    headerContainer: '',
    todayIndicator: '',
    weekDayLabel: '',
  },
  variants: { variant: {} },
})

export type DateRangePickerStyle = VariantProps<typeof createDateRangePickerStyle>
export type CreateDateRangePickerStyle = ReturnType<typeof createDateRangePickerStyle>
