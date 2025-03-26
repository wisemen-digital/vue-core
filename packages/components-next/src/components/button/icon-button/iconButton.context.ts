import type {
  ComputedRef,
} from 'vue'

import type { IconButtonProps } from '@/components/button/icon-button/iconButton.props'
import type { CreateIconButtonStyle } from '@/components/button/icon-button/iconButton.style'
import type { ClassConfig } from '@/customClassVariants'
import { useContext } from '@/composables/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface IconButtonContext extends PropsToComputed<IconButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'iconButton'>>
  style: ComputedRef<CreateIconButtonStyle>
}

export const [
  useProvideIconButtonContext,
  useInjectIconButtonContext,
] = useContext<IconButtonContext>('iconButtonContext')
