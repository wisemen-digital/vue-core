import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { CreateTabsStyle } from '@/packages/@next/tabs/shared/style/tabs.style'
import type { TabsProps } from '@/packages/@next/tabs/shared/tabs.props'
import type { PropsToComputed } from '@/utils/props.util'

interface TabsContext extends PropsToComputed<TabsProps> {
  customClassConfig: ComputedRef<ClassConfig<'tabs'>>
  style: ComputedRef<CreateTabsStyle>
}

export const [
  useProvideTabsContext,
  useInjectTabsContext,
] = useContext<TabsContext>('tabsContext')
