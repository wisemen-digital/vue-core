import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { DatePickerProps } from '@/components/date-picker/single/datePicker.props'
import type { CreateDatePickerStyle } from '@/components/date-picker/single/datePicker.style'
import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface DatePickerContext extends PropsToComputed<DatePickerProps> {
  customClassConfig: ComputedRef<ClassConfig<'datePicker'>>
  modelValue: Ref<Date | null>
  placeholderValue: Ref<Date>
  style: ComputedRef<CreateDatePickerStyle>

}

export const [
  useProvideDatePickerContext,
  useInjectDatePickerContext,
] = useContext<DatePickerContext>('datePickerContext')
