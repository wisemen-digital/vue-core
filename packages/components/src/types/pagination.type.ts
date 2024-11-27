import type {
  ComputedRef,
  MaybeRefOrGetter,
} from 'vue'

import type { SelectItem } from '@/types/select.type'

export type SortDirection = 'asc' | 'desc'

export interface PaginationSort {
  direction: SortDirection
  key: string
}

export type PaginationFilters<TFilters> = {
  [K in keyof TFilters]?: TFilters[K]
}

export interface PageChangeEvent {
  limit: number
  offset: number
}

export type FilterChangeEvent<TFilters> = PaginationFilters<TFilters>

export interface SortChangeEvent {
  direction: SortDirection
  key: string
}

export interface PaginationOptions<TFilters> {
  filters?: PaginationFilters<TFilters>
  pagination: {
    limit: number
    offset: number
  }
  search?: string
  sort?: PaginationSort | undefined
  staticFilters?: PaginationFilters<TFilters>
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

export type Pagination<TFilters> = UsePaginationReturnType<TFilters>

export interface PaginatedData<TSchema> {
  data: TSchema[]
  meta: {
    limit: number
    offset: number
    total: number
  }
}

// Pagination composable types

export interface UsePaginationOptions<TFilters> {
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
  options?: MaybeRefOrGetter<DeepPartial<PaginationOptions<TFilters>>> | null
}

export interface UsePaginationReturnType<TFilters> {
  clearFilters: () => void
  handleFilterChange: (event: FilterChangeEvent<TFilters>) => void
  handlePageChange: (event: PageChangeEvent) => void
  handleSearchChange: (value: string) => void
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
