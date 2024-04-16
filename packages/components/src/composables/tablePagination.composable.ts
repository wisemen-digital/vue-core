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
  UseTablePaginationReturnType,
} from '@/types/table.type'

import { base64Decode, base64Encode } from '../utils/base64.util'

interface UseTablePaginationOptions<TFilters> {
  /**
   * Default pagination options. If not provided, the default options will be used.
   */
  defaultPaginationOptions?: MaybeRefOrGetter<PaginationOptions<TFilters>> | null
  /**
   * Identifier used to store pagination options in a route query.
   */
  id: string // TODO: Enum?
}

const DEFAULT_PAGINATION_OPTIONS = {
  filters: {},
  pagination: {
    page: 0,
    perPage: 20,
  },
  sort: {},
} as const

export function useTablePagination<TFilters>({
  defaultPaginationOptions = null,
  id,
}: UseTablePaginationOptions<TFilters>): UseTablePaginationReturnType<TFilters> {
  const routeQuery = useRouteQuery<string | undefined>(id)
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
      sort: {
        ...currentOptions.sort,
        ...userOptions.sort,
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

  watch(paginationOptions, (newPaginationoptions) => {
    routeQuery.value = base64Encode(JSON.stringify(newPaginationoptions))
  })

  return {
    handleFilterChange,
    handlePageChange,
    handleSortChange,
    paginationOptions: computed<PaginationOptions<TFilters>>(() => paginationOptions.value),
  }
}
