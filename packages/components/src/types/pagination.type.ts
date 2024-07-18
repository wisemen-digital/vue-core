import type {
  ComputedRef,
  MaybeRefOrGetter,
} from 'vue'

import type { ComboboxItem } from '@/types/comboboxItem.type'
import type { SelectItem } from '@/types/selectItem.type'

export type SortDirection = 'asc' | 'desc'

export interface PaginationSort {
  direction: SortDirection
  key: string
}

export type PaginationFilters<TFilters> = {
  [K in keyof TFilters]?: TFilters[K]
}

export interface PageChangeEvent {
  page: number
  perPage: number
}

export type FilterChangeEvent<TFilters> = PaginationFilters<TFilters>
export interface TableFilterEvent<TFilters> {
  key: keyof TFilters
  value: FilterValues | null
}

export interface SortChangeEvent {
  direction: SortDirection
  key: string
}

export interface PaginationOptions<TFilters> {
  filters?: PaginationFilters<TFilters>
  pagination: {
    page: number
    perPage: number
  }
  sort?: PaginationSort | undefined
  staticFilters?: PaginationFilters<TFilters>
}

interface PaginationFilterBase<TFilters> {
  id: keyof TFilters
  isVisible?: boolean
  label: string
}

export type FilterValues = boolean
  | number
  | string
  | string[]
export type Filters = Record<string, FilterValues | undefined>

export interface PaginationFilterWithMultipleOptions<TFilters> extends PaginationFilterBase<TFilters> {
  displayFn: (value: string) => string
  options: ComboboxItem<string>[]
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

export type Pagination<TFilters> = UsePaginationReturnType<TFilters>

export interface PaginatedData<TSchema> {
  data: TSchema[]
  total: number
}

// Pagination composable types

export interface UsePaginationOptions<TFilters> {
  /**
   * Identifier used to store pagination options in a route query.
   */
  id: string
  /**
   * Default pagination options. If not provided, the default options will be used.
   * @default null
   */
  defaultPaginationOptions?: MaybeRefOrGetter<DeepPartial<PaginationOptions<TFilters>>> | null
  /**
   * If true, the route query will be disabled.
   * @default false
   */
  disableRouteQuery?: boolean
}

export interface UsePaginationReturnType<TFilters> {
  clearFilters: () => void
  handleFilterChange: (event: FilterChangeEvent<TFilters>) => void
  handlePageChange: (event: PageChangeEvent) => void
  handleSortChange: (event: SortChangeEvent) => void
  paginationOptions: ComputedRef<PaginationOptions<TFilters>>
}

// Local pagination composable types

export interface UseLocalPaginationOptions<TSchema, TFilters> extends UsePaginationOptions<TFilters> {
  items: MaybeRefOrGetter<TSchema[]>
}

export interface UseLocalPaginationReturnType<TSchema, TFilters> {
  data: ComputedRef<PaginatedData<TSchema>>
  pagination: UsePaginationReturnType<TFilters>
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
