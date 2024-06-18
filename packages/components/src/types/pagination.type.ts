import type { ComputedRef } from 'vue'

import type { ComboboxItem } from '@/types/comboboxItem.type'
import type { SelectItem } from '@/types/selectItem.type'

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
  placeholder: string
  type: 'multiselect'
}

export interface PaginationFilterWithSingleOption<TFilters> extends PaginationFilterBase<TFilters> {
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
