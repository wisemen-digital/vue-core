import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { DateFieldProps } from '@/components/date-field/dateField.props'
import type { CreateDateFieldStyle } from '@/components/date-field/dateField.style'
import { useContext } from '@/composables/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface DateFieldContext extends PropsToComputed<DateFieldProps> {
  customClassConfig: ComputedRef<ClassConfig<'dateField'>>
  modelValue: Ref<Date | null>
  style: ComputedRef<CreateDateFieldStyle>
  onBlur: (event: FocusEvent) => void
  onFocus: (event: FocusEvent) => void
}

export const [
  useProvideDateFieldContext,
  useInjectDateFieldContext,
] = useContext<DateFieldContext>('dateFieldContext')
