import { useRouteQuery } from '@vueuse/router'
import {
  computed,
  shallowRef,
  toValue,
  watch,
} from 'vue'

import type {
  FilterChangeEvent,
  PageChangeEvent,
  PaginationFilters,
  PaginationOptions,
  SortChangeEvent,
  UsePaginationOptions,
  UsePaginationReturnType,
} from '@/types/pagination.type'
import { base64Decode, base64Encode } from '@/utils/base64.util'

const DEFAULT_PAGINATION_OPTIONS: PaginationOptions<unknown> = {
  filters: {} as PaginationFilters<unknown>,
  pagination: {
    page: 0,
    perPage: 20,
  },
  search: undefined,
  sort: undefined,
  staticFilters: {} as PaginationFilters<unknown>,
} as const

export function usePagination<TFilters>({
  id,
  defaultPaginationOptions = null,
  disableRouteQuery = false,
}: UsePaginationOptions<TFilters>): UsePaginationReturnType<TFilters> {
  const routeQuery = disableRouteQuery ? null : useRouteQuery(id)
  const paginationOptions = shallowRef<PaginationOptions<TFilters>>(getDefaultPaginationOptions())

  function mergePaginationOptions(
    userOptions: PaginationOptions<TFilters>,
    currentOptions: PaginationOptions<TFilters>,
  ): PaginationOptions<TFilters> {
    const mergedFilters = {
      ...(currentOptions.filters ?? {}),
      ...(userOptions.filters ?? {}),
    } as PaginationFilters<TFilters>

    return {
      filters: mergedFilters,
      pagination: {
        ...currentOptions.pagination,
        ...userOptions.pagination,
      },
      sort: currentOptions.sort ?? userOptions.sort ?? undefined,
      staticFilters: {
        ...currentOptions.staticFilters,
        ...userOptions.staticFilters,
      },
    }
  }

  function getRouteQueryPaginationOptions(): PaginationOptions<TFilters> | null {
    const searchParams = new URLSearchParams(window.location.search)
    const paginationOptionsQuery = searchParams.get(id)

    if (paginationOptionsQuery === null) {
      return null
    }

    return JSON.parse(base64Decode(paginationOptionsQuery))
  }

  function getDefaultPaginationOptions(): PaginationOptions<TFilters> {
    const routeQueryPaginationOptions = getRouteQueryPaginationOptions()

    if (routeQueryPaginationOptions !== null) {
      return routeQueryPaginationOptions
    }

    if (defaultPaginationOptions !== null) {
      return mergePaginationOptions(
        toValue(defaultPaginationOptions as PaginationOptions<TFilters>),
        DEFAULT_PAGINATION_OPTIONS as PaginationOptions<TFilters>,
      )
    }

    return structuredClone(DEFAULT_PAGINATION_OPTIONS as PaginationOptions<TFilters>)
  }

  function handlePageChange(event: PageChangeEvent): void {
    paginationOptions.value = {
      ...paginationOptions.value,
      pagination: event,
    }
  }

  function handleFilterChange(event: FilterChangeEvent<TFilters>): void {
    const filtersWithoutUndefinedValues = Object.fromEntries(
      Object.entries({
        ...paginationOptions.value.filters,
        ...event,
      }).filter(([
        , value,
      ]) => value !== undefined && value !== null && value !== ''),
    ) as PaginationFilters<TFilters>

    paginationOptions.value = {
      ...paginationOptions.value,
      filters: filtersWithoutUndefinedValues,
      pagination: {
        ...paginationOptions.value.pagination,
        page: 0,
      },
    }
  }

  function handleSearchChange(value: string): void {
    paginationOptions.value = {
      ...paginationOptions.value,
      pagination: {
        ...paginationOptions.value.pagination,
        page: 0,
      },
      search: value.trim().length > 0 ? value : undefined,
    }
  }

  function handleSortChange(event: SortChangeEvent): void {
    paginationOptions.value = {
      ...paginationOptions.value,
      sort: event,
    }
  }

  function clearFilters(): void {
    paginationOptions.value = {
      ...paginationOptions.value,
      filters: {} as PaginationFilters<TFilters>,
      pagination: {
        ...paginationOptions.value.pagination,
        page: 0,
      },
    }
  }

  watch(paginationOptions, (newPaginationOptions) => {
    if (disableRouteQuery) {
      return
    }

    routeQuery!.value = base64Encode(JSON.stringify(newPaginationOptions))
  })

  return {
    clearFilters,
    handleFilterChange,
    handlePageChange,
    handleSearchChange,
    handleSortChange,
    paginationOptions: computed<PaginationOptions<TFilters>>(() => paginationOptions.value),
  }
}
