import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'
import type { TableColumn } from '@/components/table/table.type'
import type {
  BasePagination,
  PaginatedData,
  Pagination,
} from '@/composables/pagination/pagination.type'
import type { Routes } from '@/types/routes.type'

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
   * Makes the first column sticky (fixed) when horizontally scrolling.
   * @default false
   */
  isFirstColumnSticky?: boolean
  /**
   * Makes the last column sticky (fixed) when horizontally scrolling.
   * @default false
   */
  isLastColumnSticky?: boolean
  /**
   * Controls whether a loading state is shown.
   */
  isLoading: boolean
  /**
   * An array of column definitions that describe how to render each column.
   */
  columns: TableColumn<TSchema>[]
  /**
   * The paginated data to be displayed in the table.
   */
  data: PaginatedData<TSchema> | null
  /**
   * Pagination object
   */
  pagination: Pagination<TPagination>
  /**
   * Optional row-level action. When using other interactable elements inside cells,
   * make sure to user the `TableInteractiveElement` component.
   * @default null
   */
  rowAction?: RowAction<TSchema> | null
  /**
   * Defines the visual style of the table.
   */
  variant?: GetComponentProp<'table', 'variant'> | null
}
