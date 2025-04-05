import type { SharedDatePickerProps } from '@/components/date-picker/shared/sharedDatePicker.props'
import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { CustomizableElement } from '@/utils/props.util'

export interface DateRangePickerProps extends SharedDatePickerProps, CustomizableElement<'dateRangePicker'> {
  /**
   * When combined with isDateUnavailable, determines whether non-contiguous ranges,
   * i.e. ranges containing unavailable dates, may be selected.
   * @default false
   */
  allowNonContinuousSelection?: boolean
  /**
   * 
   */
  variant?: GetComponentPropCustomValues<'dateRangePicker', 'variant'> | null
}
