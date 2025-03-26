import type {
  ComputedRef,
} from 'vue'

import type { TabsProps } from '@/components/tabs/shared/tabs.props'
import type { CreateTabsStyle } from '@/components/tabs/shared/tabs.style'
import { useContext } from '@/composables/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface TabsContext extends PropsToComputed<TabsProps> {
  customClassConfig: ComputedRef<ClassConfig<'tabs'>>
  style: ComputedRef<CreateTabsStyle>
}

export const [
  useProvideTabsContext,
  useInjectTabsContext,
] = useContext<TabsContext>('tabsContext')
