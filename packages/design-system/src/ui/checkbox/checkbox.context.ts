import type {
  ComputedRef,
  InjectionKey,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

import type { CheckboxStyle } from '@/ui/checkbox/checkbox.style'

interface CheckboxContext {
  isIndeterminate: ComputedRef<boolean>
  checkboxStyle: ComputedRef<CheckboxStyle>
}

export const checkboxContextKey: InjectionKey<CheckboxContext> = Symbol('CheckboxContextKey')

export function useProvideCheckboxContext(context: CheckboxContext): void {
  provide(checkboxContextKey, context)
}

export function useInjectCheckboxContext(): CheckboxContext {
  const context = inject(checkboxContextKey, null)

  if (context === null) {
    throw new Error('CheckboxContext not provided')
  }

  return context
}
