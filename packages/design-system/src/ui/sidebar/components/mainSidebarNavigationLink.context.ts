import type {
  ComputedRef,
  InjectionKey,
} from 'vue'

import { useContext } from '@/composables/context.composable'

interface MainSidebarNavigationLinkContext {
  isActive: ComputedRef<boolean>
}

export const mainSidebarNavigationLinkContextKey: InjectionKey<MainSidebarNavigationLinkContext> = Symbol('MainSidebarNavigationLinkContextKey')

export const [
  useProvideMainSidebarNavigationLinkContext,
  useInjectMainSidebarNavigationLinkContext,
] = useContext<MainSidebarNavigationLinkContext>('MainSidebarNavigationLinkContextKey')
