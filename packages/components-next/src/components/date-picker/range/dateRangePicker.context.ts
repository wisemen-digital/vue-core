import type {
  ComputedRef,
  Ref,
} from 'vue'

import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'
import type { DateRangePickerProps } from '@/components/date-picker/range/dateRangePicker.props'
import type { CreateDateRangePickerStyle } from '@/components/date-picker/range/dateRangePicker.style'

export type DateRangeValue = {
  from: Date | null
  until: Date | null
}

interface DateRangePickerContext extends PropsToComputed<DateRangePickerProps> {
  customClassConfig: ComputedRef<ClassConfig<'dateRangePicker'>>
  modelValue: Ref<DateRangeValue>
  placeholderValue: Ref<DateRangeValue>
  style: ComputedRef<CreateDateRangePickerStyle>

}

export const [
  useProvideDateRangePickerContext,
  useInjectDateRangePickerContext,
] = useContext<DateRangePickerContext>('dateRangePickerContext')
