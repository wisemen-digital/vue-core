import type {
  ComputedRef,
  InjectionKey,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

interface MainSidebarNavigationLinkContext {
  isActive: ComputedRef<boolean>
}

export const mainSidebarNavigationLinkContextKey: InjectionKey<MainSidebarNavigationLinkContext> = Symbol('MainSidebarNavigationLinkContextKey')

export function useProvideMainSidebarNavigationLinkContext(context: MainSidebarNavigationLinkContext): void {
  provide(mainSidebarNavigationLinkContextKey, context)
}

export function useInjectMainSidebarNavigationLinkContext(): MainSidebarNavigationLinkContext {
  const context = inject(mainSidebarNavigationLinkContextKey, null)

  if (context === null) {
    throw new Error('MainSidebarNavigationLinkContext not provided')
  }

  return context
}
