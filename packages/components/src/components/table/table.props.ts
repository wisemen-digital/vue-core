import type { VNode } from 'vue'

import type {
  PaginatedData,
  Pagination,
  PaginationSchema,
} from '@/types/pagination.type'
import type { Stylable } from '@/types/stylable.type'
import type { TableColumn } from '@/types/table.type'

export interface TableProps<TSchema, TPaginationSchema extends PaginationSchema> extends Stylable<'table'> {
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
  pagination: Pagination<TPaginationSchema>
  /**
   * The class to apply to the row
   * @default null
   */
  rowClass?: ((row: TSchema, rowIndex: number) => string) | null
  /**
   * The variant of the table
   * @default 'default'
   */
  variant?: 'borderless' | 'default'
}
