import { useRouteQuery } from '@vueuse/router'
import {
  computed,
  shallowRef,
  toValue,
  watch,
} from 'vue'

import { injectConfigContext } from '@/components/config-provider/config.context'
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

export function usePagination<TFilters>({
  isRouteQueryEnabled,
  key: routeQueryKey,
  options = null,
}: UsePaginationOptions<TFilters>): UsePaginationReturnType<TFilters> {
  const globalConfigContext = injectConfigContext()

  const DEFAULT_PAGINATION_OPTIONS: PaginationOptions<unknown> = {
    filters: {} as PaginationFilters<unknown>,
    pagination: {
      limit: globalConfigContext.pagination?.limit ?? 20,
      offset: 0,
    },
    search: undefined,
    sort: undefined,
    staticFilters: {} as PaginationFilters<unknown>,
  } as const

  if (isRouteQueryEnabled && routeQueryKey === undefined) {
    throw new Error('The `key` prop is required when using the `isRouteQueryEnabled` prop')
  }

  const routeQuery = isRouteQueryEnabled ? useRouteQuery(routeQueryKey as string) : null
  const paginationOptions = shallowRef<PaginationOptions<TFilters>>(getDefaultPaginationOptions())

  function mergePaginationOptions(
    userOptions: PaginationOptions<TFilters>,
    currentOptions: PaginationOptions<TFilters>,
  ): PaginationOptions<TFilters> {
    const mergedFilters = {
      ...(currentOptions.filters ?? {}),
      ...(userOptions.filters ?? {}),
    } as PaginationFilters<TFilters>

    const search = currentOptions.search ?? userOptions.search ?? ''

    return {
      filters: mergedFilters,
      pagination: {
        ...currentOptions.pagination,
        ...userOptions.pagination,
      },
      search: search.trim().length > 0 ? search : undefined,
      sort: currentOptions.sort ?? userOptions.sort ?? undefined,
      staticFilters: {
        ...currentOptions.staticFilters,
        ...userOptions.staticFilters,
      },
    }
  }

  function getRouteQueryPaginationOptions(): PaginationOptions<TFilters> | null {
    if (routeQuery === null) {
      return null
    }

    const queryValue = routeQuery.value

    if (queryValue === null || queryValue === undefined) {
      return null
    }

    return JSON.parse(base64Decode(queryValue.toString()))
  }

  function getDefaultPaginationOptions(): PaginationOptions<TFilters> {
    const routeQueryPaginationOptions = getRouteQueryPaginationOptions()

    if (routeQueryPaginationOptions !== null) {
      return routeQueryPaginationOptions
    }

    if (options !== null) {
      return mergePaginationOptions(
        toValue(options as PaginationOptions<TFilters>),
        DEFAULT_PAGINATION_OPTIONS as PaginationOptions<TFilters>,
      )
    }

    return structuredClone(DEFAULT_PAGINATION_OPTIONS as PaginationOptions<TFilters>)
  }

  function handlePageChange(event: PageChangeEvent): void {
    paginationOptions.value = {
      ...paginationOptions.value,
      pagination: {
        ...paginationOptions.value.pagination,
        ...event,
      },
    }
  }

  function handleFilterChange(event: FilterChangeEvent<TFilters>): void {
    const filtersWithoutUndefinedValues = Object.fromEntries(
      Object.entries({
        ...paginationOptions.value.filters,
        ...event,
      }).filter(([
        , value,
      ]) => value !== undefined),
    ) as PaginationFilters<TFilters>

    paginationOptions.value = {
      ...paginationOptions.value,
      filters: filtersWithoutUndefinedValues,
      pagination: {
        ...paginationOptions.value.pagination,
        offset: 0,
      },
    }
  }

  function handleSearchChange(value: string): void {
    paginationOptions.value = {
      ...paginationOptions.value,
      pagination: {
        ...paginationOptions.value.pagination,
        offset: 0,
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
        offset: 0,
      },
    }
  }

  watch(() => toValue(options), (newOptions) => {
    if (newOptions === null) {
      return
    }

    paginationOptions.value = mergePaginationOptions(
      toValue(newOptions as PaginationOptions<TFilters>),
      paginationOptions.value,
    )
  })

  watch(paginationOptions, (newPaginationOptions) => {
    if (!isRouteQueryEnabled) {
      return
    }

    if (routeQuery !== null) {
      routeQuery.value = base64Encode(JSON.stringify(newPaginationOptions))
    }
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
