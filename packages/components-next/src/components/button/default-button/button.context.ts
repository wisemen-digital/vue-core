import type { ComputedRef } from 'vue'

import type { ButtonProps } from '@/components/button/default-button/button.props'
import type { CreateButtonStyle } from '@/components/button/default-button/button.style'
import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface ButtonContext extends PropsToComputed<ButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'button'>>
  style: ComputedRef<CreateButtonStyle>
}

export const [
  useProvideButtonContext,
  useInjectButtonContext,
] = useContext<ButtonContext>('buttonContext')
