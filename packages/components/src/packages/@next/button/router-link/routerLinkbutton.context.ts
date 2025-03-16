import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { RouterLinkButtonProps } from '@/packages/@next/button/router-link/routerLinkbutton.props'
import type { CreateButtonStyle } from '@/packages/@next/button/shared/style/button.style'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface RouterLinkButtonContext extends PropsToComputed<RouterLinkButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'button'>>
  style: ComputedRef<CreateButtonStyle>
}

export const [
  useProvideRouterLinkButtonContext,
  useInjectRouterLinkButtonContext,
] = useContext<RouterLinkButtonContext>('iconButtonContext')
