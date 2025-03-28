import type {
  ComputedRef,
  MaybeRefOrGetter,
} from 'vue'

export type PaginationSortOrder = 'asc' | 'desc'

export interface PaginationSort {
  direction: PaginationSortOrder
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
  direction: PaginationSortOrder
  key: string
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

export interface PaginationOptions<TFilters> {
  filters?: PaginationFilters<TFilters>
  pagination: PaginationSet
  search?: string
  sort?: PaginationSort | undefined
  staticFilters?: PaginationFilters<TFilters>
}

export type Pagination<TFilters> = UsePaginationReturnType<TFilters>

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
  type?: 'keyset' | 'offset'
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
