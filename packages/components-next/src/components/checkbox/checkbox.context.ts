import type { ComputedRef } from 'vue'

import type { CheckboxProps } from '@/components/checkbox/checkbox.props'
import type { CreateCheckboxStyle } from '@/components/checkbox/checkbox.style'
import { useContext } from '@/composables/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface CheckboxContext extends PropsToComputed<CheckboxProps> {
  customClassConfig: ComputedRef<ClassConfig<'checkbox'>>
  style: ComputedRef<CreateCheckboxStyle>
}

export const [
  useProvideCheckboxContext,
  useInjectCheckboxContext,
] = useContext<CheckboxContext>('checkboxContext')
