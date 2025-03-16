import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { ButtonProps } from '@/packages/@next/button/shared/button.props'
import type { CreateButtonStyle } from '@/packages/@next/button/shared/style/button.style'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface ButtonContext extends PropsToComputed<ButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'button'>>
  style: ComputedRef<CreateButtonStyle>
}

export const [
  useProvideButtonContext,
  useInjectButtonContext,
] = useContext<ButtonContext>('buttonContext')
