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
  InfinitePaginationOptions,
  PageChangeEvent,
  PaginationFilters,
  SortChangeEvent,
  UseInfinitePaginationOptions,
  UseInfinitePaginationReturnType,
} from '@/types/pagination.type'
import { base64Decode, base64Encode } from '@/utils/base64.util'

export function useInfinitePagination<TFilters>({
  isRouteQueryEnabled,
  key: routeQueryKey,
  options = null,
}: UseInfinitePaginationOptions<TFilters>): UseInfinitePaginationReturnType<TFilters> {
  const globalConfigContext = injectConfigContext()

  const DEFAULT_PAGINATION_OPTIONS: InfinitePaginationOptions<unknown> = {
    filters: {} as PaginationFilters<unknown>,
    pagination: {
      key: null,
      limit: globalConfigContext.pagination?.limit ?? 20,
    },
    search: undefined,
    sort: undefined,
    staticFilters: {} as PaginationFilters<unknown>,
  } as const

  if (isRouteQueryEnabled && routeQueryKey === undefined) {
    throw new Error('The `key` prop is required when using the `isRouteQueryEnabled` prop')
  }

  const routeQuery = isRouteQueryEnabled ? useRouteQuery(routeQueryKey as string) : null
  const paginationOptions = shallowRef<InfinitePaginationOptions<TFilters>>(
    getDefaultPaginationOptions(),
  )

  function mergePaginationOptions(
    userOptions: InfinitePaginationOptions<TFilters>,
    currentOptions: InfinitePaginationOptions<TFilters>,
  ): InfinitePaginationOptions<TFilters> {
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

  function getRouteQueryPaginationOptions(): InfinitePaginationOptions<TFilters> | null {
    if (routeQuery === null) {
      return null
    }

    const queryValue = routeQuery.value

    if (queryValue === null || queryValue === undefined) {
      return null
    }

    return JSON.parse(base64Decode(queryValue.toString()))
  }

  function getDefaultPaginationOptions(): InfinitePaginationOptions<TFilters> {
    const routeQueryPaginationOptions = getRouteQueryPaginationOptions()

    if (routeQueryPaginationOptions !== null) {
      return routeQueryPaginationOptions
    }

    if (options !== null) {
      return mergePaginationOptions(
        toValue(options as InfinitePaginationOptions<TFilters>),
        DEFAULT_PAGINATION_OPTIONS as InfinitePaginationOptions<TFilters>,
      )
    }

    return structuredClone(DEFAULT_PAGINATION_OPTIONS as InfinitePaginationOptions<TFilters>)
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
      },
    }
  }

  function handleSearchChange(value: string): void {
    paginationOptions.value = {
      ...paginationOptions.value,
      pagination: {
        ...paginationOptions.value.pagination,
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
      },
    }
  }

  watch(() => toValue(options), (newOptions) => {
    if (newOptions === null) {
      return
    }

    paginationOptions.value = mergePaginationOptions(
      toValue(newOptions as InfinitePaginationOptions<TFilters>),
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
    paginationOptions: computed<InfinitePaginationOptions<TFilters>>(() => paginationOptions.value),
  }
}
