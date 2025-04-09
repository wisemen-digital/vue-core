import type {
  ComputedRef,
  InjectionKey,
} from 'vue'
import {
  computed,
  inject,
  provide,
} from 'vue'

import type { DarkModeValue } from '@/composables/dark-mode/darkMode.composable'

interface ThemeProviderContext {
  appearance: ComputedRef<DarkModeValue>
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
      appearance: computed<DarkModeValue>(() => 'light'),
      theme: computed<string>(() => 'default'),
    }
  }

  return context
}
