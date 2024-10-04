import {
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface SelectContext {
  isMultiple: boolean
}

const selectContextKey: InjectionKey<SelectContext> = Symbol('selectContext')

export function useProvideSelectContext(
  context: SelectContext,
): void {
  provide(selectContextKey, context)
}

export function useInjectSelectContext(): SelectContext {
  const context = inject(selectContextKey) ?? null

  if (context === null) {
    throw new Error('Select context is not provided')
  }

  return context
}
