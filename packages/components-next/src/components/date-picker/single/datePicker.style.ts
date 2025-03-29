import { tv, type VariantProps } from 'tailwind-variants'

import { createSharedDatePickerStyle } from '@/components/date-picker/shared/sharedDatePicker.style'

export const createDatePickerStyle = tv({
  extend: createSharedDatePickerStyle,
  slots: {
    date: '',
    header: '',
    headerContainer: '',
    todayIndicator: '',
    weekDayLabel: '',
  },
  variants: {
    variant: {},
  },
})

export type DatePickerStyle = VariantProps<typeof createDatePickerStyle>
export type CreateDatePickerStyle = ReturnType<typeof createDatePickerStyle>
