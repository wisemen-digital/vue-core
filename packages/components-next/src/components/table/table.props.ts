import type { TableColumn } from '@/components/table/table.type'
import type {
  BasePagination,
  PaginatedData,
  Pagination,
} from '@/composables/pagination/pagination.type'
import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Routes } from '@/types/routes.type'
import type { CustomizableElement } from '@/utils/props.util'

interface LinkAction<TSchema> {
  label: (data: TSchema) => string
  // @ts-expect-error no matching signature
  to: (data: TSchema) => Routes[number]
  type: 'link'
}

interface ButtonAction<TSchema> {
  label: (data: TSchema) => string
  type: 'button'
  onClick: (data: TSchema) => void
}

type RowAction<TSchema> = ButtonAction<TSchema> | LinkAction<TSchema>

export interface TableProps<TSchema, TPagination extends BasePagination> extends CustomizableElement<'table'> {
  /**
   *
   */
  isFirstColumnSticky?: boolean
  /**
   *
   */
  isLastColumnSticky?: boolean
  /**
   *
   */
  isLoading: boolean
  /**
   *
   */
  columns: TableColumn<TSchema>[]
  /**
   *
   */
  data: PaginatedData<TSchema> | null
  /**
   *
   */
  pagination: Pagination<TPagination>
  /**
   *
   */
  rowAction?: RowAction<TSchema> | null
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'table', 'variant'> | null
}
