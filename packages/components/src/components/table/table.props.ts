import type { VNode } from 'vue'

import type {
  BasePagination,
  PaginatedData,
  Pagination,
} from '@/types/pagination.type'
import type { Stylable } from '@/types/stylable.type'
import type { TableColumn } from '@/types/table.type'

export interface TableProps<TSchema, TPagination extends BasePagination> extends Stylable<'table'> {
  /**
   * Whether the table is fetching
   * @default false
   */
  isFetching?: boolean
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
   * The options for the infinite scroll
   * @default undefined
   */
  infiniteScroll?: {
    distance?: number
    onNext: () => Promise<void>
  }
  /**
   * The pagination of the table
   */
  pagination: Pagination<TPagination>
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
