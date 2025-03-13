import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { CreateTabsStyle } from '@/packages/@next/tabs/style/tabs.style'
import type { TabsProps } from '@/packages/@next/tabs/tabs.props'
import type { PropsToComputed } from '@/utils/props.util'

interface TabsContext extends PropsToComputed<TabsProps> {
  customClassConfig: ComputedRef<ClassConfig<'tabs'>>
  style: ComputedRef<CreateTabsStyle>
}

const tabsContextKey: InjectionKey<TabsContext> = Symbol('tabsContext')

export function useProvideTabsContext(context: TabsContext): void {
  provide(tabsContextKey, context)
}

export function useInjectTabsContext(): TabsContext {
  const context = inject(tabsContextKey)

  if (context === undefined) {
    throw new Error('Tabs context is not provided. Make sure to wrap your components in `TabsRoot`.')
  }

  return context
}
