import type { VNode } from 'vue'

import type { PaginatedData, Pagination } from '@/types/pagination.type'
import type { StyleConfig } from '@/types/style.type'
import type { TableColumn } from '@/types/table.type'

export interface TableProps<TSchema, TFilters> {
  /**
   * Whether the first column is sticky
   * @default false
   */
  isFirstColumnSticky?: boolean
  /**
   * Whether the last column is sticky
   * @default false
   */
  isLastColumnSticky?: boolean
  /**
   * Whether the table is loading
   */
  isLoading: boolean
  /**
   * The columns of the table
   */
  columns: TableColumn<TSchema>[]
  /**
   * The data of the table
   */
  data: PaginatedData<TSchema> | null
  /**
   * The content to show when a row is expanded
   * @default null
   */
  expandedRowContent?: ((row: TSchema) => VNode) | null
  /**
   * The pagination of the table
   */
  pagination: Pagination<TFilters>
  /**
   * The class to apply to the row
   * @default null
   */
  rowClass?: ((row: TSchema, rowIndex: number) => string) | null
  /**
   * The style config of the table.
   * @default null
   */
  styleConfig?: StyleConfig<'table'> | null
}
