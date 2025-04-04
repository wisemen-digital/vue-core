import type { SharedDatePickerProps } from '@/components/date-picker/shared/sharedDatePicker.props'
import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { CustomizableElement } from '@/utils/props.util'

export interface DatePickerProps extends SharedDatePickerProps, CustomizableElement<'datePicker'> {
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'datePicker', 'variant'> | null
}
