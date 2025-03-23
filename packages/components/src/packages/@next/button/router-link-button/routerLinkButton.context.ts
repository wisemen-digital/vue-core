import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { RouterLinkButtonProps } from '@/packages/@next/button/router-link-button/routerLinkButton.props'
import type { CreateRouterLinkButtonStyle } from '@/packages/@next/button/router-link-button/routerLinkButton.style'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface RouterLinkButtonContext extends PropsToComputed<RouterLinkButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'routerLinkButton'>>
  style: ComputedRef<CreateRouterLinkButtonStyle>
}

export const [
  useProvideRouterLinkButtonContext,
  useInjectRouterLinkButtonContext,
] = useContext<RouterLinkButtonContext>('iconButtonContext')
