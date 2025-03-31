import type { ComputedRef } from 'vue'

import type { RadioGroupItemProps } from '@/components/radio-group-item/radioGroupItem.props'
import type { CreateRadioGroupItemStyle } from '@/components/radio-group-item/radioGroupItem.style'
import { useContext } from '@/composables/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface RadioGroupItemContext extends PropsToComputed<RadioGroupItemProps> {
  customClassConfig: ComputedRef<ClassConfig<'radioGroupItem'>>
  style: ComputedRef<CreateRadioGroupItemStyle>
}

export const [
  useProvideRadioGroupItemContext,
  useInjectRadioGroupItemContext,
] = useContext<RadioGroupItemContext>('radioGroupItemContext')
