import {
  computed,
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { Appearance } from '@/composables/darkMode.composable'

interface ThemeProviderContext {
  appearance: ComputedRef<Appearance>
  theme: ComputedRef<string & {} | 'default'>
}

export const themeProviderContextKey: InjectionKey<ThemeProviderContext> = Symbol('themeProviderContextKey')

export function provideThemeProviderContext(context: ThemeProviderContext): void {
  provide(themeProviderContextKey, context)
}

export function injectThemeProviderContext(): ThemeProviderContext {
  const context = inject(themeProviderContextKey, null)

  if (context === null) {
    return {
      appearance: computed<Appearance>(() => 'light'),
      theme: computed<string>(() => 'default'),
    }
  }

  return context
}
