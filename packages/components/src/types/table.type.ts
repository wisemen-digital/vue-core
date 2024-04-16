import type { ComputedRef, VNode } from 'vue'

export type SortDirection = 'asc' | 'desc'

type PaginationSort = Record<string, SortDirection>

export type PaginationFilters<TFilters> = {
  [K in keyof TFilters]: TFilters[K]
}

export interface PageChangeEvent {
  page: number
  perPage: number
}

export type FilterChangeEvent<TFilters> = {
  [K in keyof TFilters]?: unknown
}

export type SortChangeEvent = Record<string, SortDirection>

export interface PaginationOptions<TFilters> {
  filters?: PaginationFilters<TFilters>
  pagination: {
    page: number
    perPage: number
  }
  sort?: PaginationSort
}

interface BaseTableColumn {
  id: string
  isSortable?: boolean
  label: string
  size: string
}

interface TableColumnWithRender<TSchema> extends BaseTableColumn {
  render: (row: TSchema) => VNode
  value?: never
}

interface TableColumnWithValue<TSchema> extends BaseTableColumn {
  render?: never
  value: (row: TSchema) => string
}

export type TableColumn<TSchema> = TableColumnWithRender<TSchema> | TableColumnWithValue<TSchema>

interface TableFilterBase<TFilters> {
  id: keyof TFilters
  label: string
}

export interface TableFilterWithOptions<TFilters> extends TableFilterBase<TFilters> {
  options: { label: string, value: string }[]
  type: 'multiselect' | 'select'
}

export interface TableFilterBoolean<TFilters> extends TableFilterBase<TFilters> {
  type: 'boolean'
}

export interface TableFilterText<TFilters> extends TableFilterBase<TFilters> {
  type: 'text'
}

export type TableFilter<TFilters> =
  | TableFilterBoolean<TFilters>
  | TableFilterText<TFilters>
  | TableFilterWithOptions<TFilters>

export interface UseTablePaginationReturnType<TFilters> {
  handleFilterChange: (event: FilterChangeEvent<TFilters>) => void
  handlePageChange: (event: PageChangeEvent) => void
  handleSortChange: (event: SortChangeEvent) => void
  paginationOptions: ComputedRef<PaginationOptions<TFilters>>
}

export type Pagination<TFilters> = UseTablePaginationReturnType<TFilters>

export interface PaginatedData<TSchema> {
  data: TSchema[]
  total: number
}
