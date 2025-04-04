import type {
  InjectionKey,
  Ref,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

interface TableRowContext {
  isExpanded: Ref<boolean>
}

const tableRowContextKey: InjectionKey<TableRowContext> = Symbol('tableRowContextKey')

export function provideTableRowContext(context: TableRowContext): void {
  provide(tableRowContextKey, context)
}

export function injectTableRowContext(): TableRowContext {
  const context = inject(tableRowContextKey)

  if (context === undefined) {
    throw new Error('TableRowContext is not provided. Please use `provideTableRowContext` to provide the context.')
  }

  return context
}
