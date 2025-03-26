import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface SelectOptionContext {
  isSelected: ComputedRef<boolean>
}

const selectOptionContextKey: InjectionKey<SelectOptionContext> = Symbol('selectOptionContextKey')

export function provideSelectOptionContext(context: SelectOptionContext): void {
  provide(selectOptionContextKey, context)
}

export function injectSelectOptionContext(): SelectOptionContext {
  const context = inject(selectOptionContextKey)

  if (context === undefined) {
    throw new Error('SelectOption context is not provided. Please use `provideSelectOptionContext` to provide the context.')
  }

  return context
}
