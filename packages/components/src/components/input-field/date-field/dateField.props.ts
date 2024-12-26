import type { CalendarProps } from '@/components/calendar/calendar.props'
import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'
import type { PopperProps } from '@/types'

export interface DateFieldProps extends Omit<TextFieldProps, 'autocomplete' | 'placeholder' | 'type'>,
  CalendarProps,
  PopperProps {}
