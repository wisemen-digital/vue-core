import type { ComputedRef } from 'vue'

export type SortDirection = 'asc' | 'desc'

interface PaginationSort {
  direction: SortDirection
  key: string
}

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
}

interface PaginationFilterBase<TFilters> {
  id: keyof TFilters
  label: string
}

export interface PaginationFilterWithOptions<TFilters> extends PaginationFilterBase<TFilters> {
  options: { label: string, value: string }[]
  type: 'multiselect' | 'select'
}

export interface PaginationFilterBoolean<TFilters> extends PaginationFilterBase<TFilters> {
  type: 'boolean'
}

export interface PaginationFilterText<TFilters> extends PaginationFilterBase<TFilters> {
  type: 'text'
}

export type PaginationFilter<TFilters> =
  | PaginationFilterBoolean<TFilters>
  | PaginationFilterText<TFilters>
  | PaginationFilterWithOptions<TFilters>

export interface UsePaginationReturnType<TFilters> {
  clearFilters: () => void
  handleFilterChange: (event: FilterChangeEvent<TFilters>) => void
  handlePageChange: (event: PageChangeEvent) => void
  handleSortChange: (event: SortChangeEvent) => void
  paginationOptions: ComputedRef<PaginationOptions<TFilters>>
}

export type Pagination<TFilters> = UsePaginationReturnType<TFilters>

export interface PaginatedData<TSchema> {
  data: TSchema[]
  total: number
}
