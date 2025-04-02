import type { ComputedRef } from 'vue'

import type { SwitchProps } from '@/components/switch/switch.props'
import type { CreateSwitchStyle } from '@/components/switch/switch.style'
import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface SwitchContext extends PropsToComputed<SwitchProps> {
  customClassConfig: ComputedRef<ClassConfig<'switch'>>
  style: ComputedRef<CreateSwitchStyle>
}

export const [
  useProvideSwitchContext,
  useInjectSwitchContext,
] = useContext<SwitchContext>('switchContext')
