import type {
  ComputedRef,
  InjectionKey,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

interface SidebarNavigationLinkContext {
  isActive: ComputedRef<boolean>
}

export const sidebarNavigationLinkContextKey: InjectionKey<SidebarNavigationLinkContext> = Symbol('SidebarNavigationLinkContextKey')

export function useProvideSidebarNavigationLinkContext(context: SidebarNavigationLinkContext): void {
  provide(sidebarNavigationLinkContextKey, context)
}

export function useInjectSidebarNavigationLinkContext(): SidebarNavigationLinkContext {
  const context = inject(sidebarNavigationLinkContextKey, null)

  if (context === null) {
    throw new Error('SidebarNavigationLinkContext not provided')
  }

  return context
}
