import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import type { DateRangePickerProps } from '@/components/date-picker/range/dateRangePicker.props'
import type { CreateDateRangePickerStyle } from '@/components/date-picker/range/dateRangePicker.style'
import { useContext } from '@/composables/context/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

export interface DateRangeValue {
  from: Date | null
  until: Date | null
}

interface DateRangePickerContext extends PropsToComputed<DateRangePickerProps> {
  customClassConfig: ComputedRef<ResolvedClassConfig<'dateRangePicker'>>
  modelValue: Ref<DateRangeValue>
  placeholderValue: Ref<Date>
  style: ComputedRef<CreateDateRangePickerStyle>

}

export const [
  useProvideDateRangePickerContext,
  useInjectDateRangePickerContext,
] = useContext<DateRangePickerContext>('dateRangePickerContext')
