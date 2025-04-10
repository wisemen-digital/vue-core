import type {
  ComputedRef,
  InjectionKey,
  VNode,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

import type {
  PaginatedData,
  Pagination,
} from '@/types/pagination.type'
import type { TableColumn } from '@/types/table.type'

export type TableRowComponent = ((data: unknown) => VNode | null) | null

interface TableContext {
  hasReachedHorizontalScrollEnd: ComputedRef<boolean>
  isFirstColumnSticky: ComputedRef<boolean>
  isLastColumnSticky: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  isScrolledToRight: ComputedRef<boolean>
  canScrollVertically: ComputedRef<boolean>
  columns: ComputedRef<TableColumn<unknown>[]>
  data: ComputedRef<PaginatedData<unknown> | null>
  expandedRowContent: ComputedRef<((row: unknown) => VNode) | null>
  gridColsStyle: ComputedRef<string>
  pagination: ComputedRef<Pagination<never>>
  rowClass: ComputedRef<((row: unknown, rowIndex: number) => string) | null>
}

const tableContextKey: InjectionKey<TableContext> = Symbol('tableContext')

export function provideTableContext(context: TableContext): void {
  provide(tableContextKey, context)
}

export function injectTableContext(): TableContext {
  const context = inject(tableContextKey)

  if (context === undefined) {
    throw new Error('Table context is not provided. Please use `provideTableContext` to provide the context.')
  }

  return context
}
