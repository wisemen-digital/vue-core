import type {
  ComputedRef,
  MaybeRefOrGetter,
} from 'vue'

import type { SelectItem } from '@/types/select.type'

export type SortDirection = 'asc' | 'desc'

export interface PaginationSort<TSortKey> {
  key: TSortKey
  order: SortDirection
}

export type PaginationFilters<TFilters> = {
  [K in keyof TFilters]?: TFilters[K]
}

export interface PageChangeEvent {
  limit: number
  offset: number
}

type FilterValue = number | string | Date | string[]

export interface PaginationSchema<
  TFilters extends Record<string, FilterValue> = Record<string, FilterValue>,
  TSortKeys = string> {
  filters: TFilters
  sortKeys: TSortKeys
}

export type FilterChangeEvent<TFilters> = PaginationFilters<TFilters>

export interface SortChangeEvent {
  key: string
  order: SortDirection
}

export interface PaginationOptions<TPagination extends PaginationSchema> {
  filters?: PaginationFilters<TPagination['filters']>
  pagination: {
    limit: number
    offset: number
  }
  search?: string
  sort?: PaginationSort<TPagination['sortKeys']>[]
  staticFilters?: PaginationFilters<TPagination['filters']>
}

interface PaginationFilterBase<TFilters> {
  id: keyof TFilters
  isVisible?: boolean
  label: string
}

export type FilterValues = number
  | string
  | string[]

export interface PaginationFilterWithMultipleOptions<TFilters> extends PaginationFilterBase<TFilters> {
  displayFn: (value: string) => string
  options: SelectItem<string>[]
  type: 'multiselect'
}

export interface PaginationFilterWithSingleOption<TFilters> extends PaginationFilterBase<TFilters> {
  displayFn: (value: FilterValues) => string
  options: SelectItem<FilterValues>[]
  placeholder: string
  type: 'select'
}

export interface PaginationFilterBoolean<TFilters> extends PaginationFilterBase<TFilters> {
  type: 'boolean'
}

export interface PaginationFilterText<TFilters> extends PaginationFilterBase<TFilters> {
  placeholder: string
  type: 'text'
}

export interface PaginationFilterNumber<TFilters> extends PaginationFilterBase<TFilters> {
  max?: number
  min?: number
  placeholder: string
  suffix?: string
  type: 'number'
}

export type PaginationFilter<TFilters> =
  | PaginationFilterBoolean<TFilters>
  | PaginationFilterNumber<TFilters>
  | PaginationFilterText<TFilters>
  | PaginationFilterWithMultipleOptions<TFilters>
  | PaginationFilterWithSingleOption<TFilters>

export type Pagination<TPagination extends PaginationSchema> = UsePaginationReturnType<TPagination>

export interface PaginatedData<TSchema> {
  data: TSchema[]
  meta: {
    limit: number
    offset: number
    total: number
  }
}

// Pagination composable types

export interface UsePaginationOptions<TPagination extends PaginationSchema> {
  /**
   * When enabled, the pagination state will be stored in the route query.
   */
  isRouteQueryEnabled: boolean
  /**
   * The key to store pagination options in the route query.
   */
  key?: string
  /**
   * The initial pagination options to use. If not provided, the default options will be used.
   * These options can be reactive and will update the pagination state when changed.
   * @default null
   */
  options?: MaybeRefOrGetter<DeepPartial<PaginationOptions<TPagination>>> | null
}

export interface UsePaginationReturnType<TPagination extends PaginationSchema> {
  clearFilters: () => void
  handleFilterChange: (event: FilterChangeEvent<TPagination['filters']>) => void
  handlePageChange: (event: PageChangeEvent) => void
  handleSearchChange: (value: string) => void
  handleSortChange: (event: SortChangeEvent) => void
  paginationOptions: ComputedRef<PaginationOptions<TPagination>>
}

// Local pagination composable types

export interface UseLocalPaginationOptions<TSchema, TPagination extends PaginationSchema>
  extends UsePaginationOptions<TPagination> {
  items: MaybeRefOrGetter<TSchema[]>
}

export interface UseLocalPaginationReturnType<TSchema, TPagination extends PaginationSchema> {
  data: ComputedRef<PaginatedData<TSchema>>
  pagination: UsePaginationReturnType<TPagination>
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
