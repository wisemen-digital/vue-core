import type { SharedDatePickerProps } from '@/components/date-picker/datePicker.props'

export interface DateRangePickerProps extends SharedDatePickerProps {
  /**
   * When combined with isDateUnavailable, determines whether non-contiguous ranges,
   * i.e. ranges containing unavailable dates, may be selected.
   * @default false
   */
  allowNonContinuousSelection?: boolean
}
