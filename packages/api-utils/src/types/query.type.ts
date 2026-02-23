import type { Sort } from './sort.type'

export interface QueryParams {
  filters?: Record<string, any>
  search?: string
  sort?: Sort[]
}

export interface WithSearchQuery {
  search: string
}

export interface WithSortQuery<TKeys extends string> {
  sort: Sort<TKeys>[]
}

export interface WithFilterQuery<TFilters extends Record<string, any>> {
  filters: TFilters
}
