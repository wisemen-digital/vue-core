import type {
  ComputedRef,
  MaybeRefOrGetter,
} from 'vue'

import type { SelectItem } from '@/types/select.type'

export type PaginationSortOrder = 'asc' | 'desc'

export interface PaginationSort<TSortKey extends string | undefined> {
  key: `${TSortKey}`
  order: PaginationSortOrder
}

export type PaginationFilters<TFilters> = {
  [K in keyof TFilters]?: TFilters[K]
}

export interface PageChangeEvent {
  limit: number
  offset: number
}

export type FilterChangeEvent<TFilters> = PaginationFilters<TFilters>

export interface SortChangeEvent<TSortKey> {
  key: TSortKey
  order: PaginationSortOrder
}

interface PaginationKeyset {
  key: unknown | null
  limit: number
  type: 'keyset'
}

interface PaginationOffset {
  limit: number
  offset: number
  type: 'offset'
}

export type PaginationSet = PaginationKeyset | PaginationOffset

export interface PaginationOptions<TPagination extends BasePagination> {
  filter?: PaginationFilters<TPagination['filter']>
  pagination: PaginationSet
  search?: string
  sort?: PaginationSort<TPagination['sort']> | undefined
  staticFilters?: PaginationFilters<TPagination['filter']>
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

export type Pagination<TPagination extends BasePagination> = UsePaginationReturnType<TPagination>

export interface PaginatedData<TSchema> {
  data: TSchema[]
  meta: {
    limit: number
    offset: number
    total: number
  } | {
    next: unknown | null
    total: number
  }
}

export interface BasePagination<TSortAndFilter extends {
  filter: Record<string, unknown> | undefined
  sort: string | undefined
} = {
  filter: Record<string, unknown> | undefined
  sort: string | undefined
},
> {
  filter: TSortAndFilter['filter']
  sort: TSortAndFilter['sort']
}

// Pagination composable types

export interface UsePaginationProps<TPagination extends BasePagination> {
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
  type?: 'keyset' | 'offset'
}

export interface UsePaginationReturnType<TPagination extends BasePagination> {
  clearFilters: () => void
  handleFilterChange: (event: FilterChangeEvent<TPagination['filter']>) => void
  handlePageChange: (event: PageChangeEvent) => void
  handleSearchChange: (value: string) => void
  handleSortChange: (event: SortChangeEvent<TPagination['sort']>) => void
  paginationOptions: ComputedRef<PaginationOptions<TPagination>>
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
