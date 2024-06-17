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

const DEFAULT_PAGINATION_OPTIONS = {
  filters: [] as PaginationFilters<unknown>,
  pagination: {
    page: 0,
    perPage: 20,
  },
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
    const mergedFilters = [
      ...(currentOptions.filters ?? []),
      ...(userOptions.filters ?? []),
    ]

    return {
      filters: mergedFilters,
      pagination: {
        ...currentOptions.pagination,
        ...userOptions.pagination,
      },
      sort: currentOptions.sort ?? userOptions.sort ?? undefined,
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
        toValue(defaultPaginationOptions),
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
    paginationOptions.value = {
      ...paginationOptions.value,
      filters: [
        ...event,
      ] as PaginationFilters<TFilters>,
      pagination: {
        ...paginationOptions.value.pagination,
        page: 0,
      },
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
      filters: toValue(defaultPaginationOptions)?.filters ?? [] as PaginationFilters<TFilters>,
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
    handleSortChange,
    paginationOptions: computed<PaginationOptions<TFilters>>(() => paginationOptions.value),
  }
}
