import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { IconButtonProps } from '@/packages/@next/button/icon/iconButton.props'
import type { CreateIconButtonStyle } from '@/packages/@next/button/icon/style/iconButton.style'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface IconButtonContext extends PropsToComputed<IconButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'iconButton'>>
  style: ComputedRef<CreateIconButtonStyle>
}

export const [
  useProvideIconButtonContext,
  useInjectIconButtonContext,
] = useContext<IconButtonContext>('iconButtonContext')
