import { useRouteQuery } from '@vueuse/router'
import type { MaybeRefOrGetter } from 'vue'
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
  UsePaginationReturnType,
} from '@/types/pagination.type'
import { base64Decode, base64Encode } from '@/utils/base64.util'

interface UsePaginationOptions<TFilters> {
  /**
   * Identifier used to store pagination options in a route query.
   */
  id: string
  /**
   * Default pagination options. If not provided, the default options will be used.
   * @default null
   */
  defaultPaginationOptions?: MaybeRefOrGetter<PaginationOptions<TFilters>> | null
  /**
   * If true, the route query will be disabled.
   * @default false
   */
  disableRouteQuery?: boolean
}

const DEFAULT_PAGINATION_OPTIONS = {
  filters: {},
  pagination: {
    page: 0,
    perPage: 20,
  },
  sort: {},
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
    return {
      filters: {
        ...currentOptions.filters,
        ...userOptions.filters,
      } as PaginationFilters<TFilters>,
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
      filters: {
        ...paginationOptions.value.filters,
        ...event,
      } as PaginationFilters<TFilters>,
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
      filters: toValue(defaultPaginationOptions)?.filters ?? {} as PaginationFilters<TFilters>,
      pagination: {
        ...paginationOptions.value.pagination,
        page: 0,
      },
    }
  }

  watch(paginationOptions, (newPaginationoptions) => {
    if (disableRouteQuery) {
      return
    }

    routeQuery!.value = base64Encode(JSON.stringify(newPaginationoptions))
  })

  return {
    clearFilters,
    handleFilterChange,
    handlePageChange,
    handleSortChange,
    paginationOptions: computed<PaginationOptions<TFilters>>(() => paginationOptions.value),
  }
}
