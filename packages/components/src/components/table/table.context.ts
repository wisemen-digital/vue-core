import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
  type VNode,
} from 'vue'

import type {
  PaginatedData,
  Pagination,
  PaginationSchema,
} from '@/types/pagination.type'
import type { TableColumn } from '@/types/table.type'

export type TableRowComponent = ((data: unknown) => VNode | null) | null

interface TableContext<TPaginationSchema extends PaginationSchema> {
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
  pagination: ComputedRef<Pagination<TPaginationSchema>>
  rowClass: ComputedRef<((row: unknown, rowIndex: number) => string) | null>
}

const tableContextKey: InjectionKey<TableContext<PaginationSchema>> = Symbol('tableContext')

export function provideTableContext<TPaginationSchema extends PaginationSchema>(
  context: TableContext<TPaginationSchema>,
): void {
  provide(tableContextKey, context)
}

export function injectTableContext<TPaginationSchema extends PaginationSchema>(): TableContext<TPaginationSchema> {
  const context = inject(tableContextKey)

  if (context === undefined) {
    throw new Error('Table context is not provided. Please use `provideTableContext` to provide the context.')
  }

  return context as TableContext<TPaginationSchema>
}
