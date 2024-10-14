import { computed, toValue } from 'vue'

import { usePagination } from '@/composables/pagination/pagination.composable'
import type {
  PaginatedData,
  PaginationSort,
  UseLocalPaginationOptions,
  UseLocalPaginationReturnType,
} from '@/types/pagination.type'

export function useLocalPagination<TSchema, TFilters>({
  id,
  defaultPaginationOptions = null,
  disableRouteQuery = false,
  items,
}: UseLocalPaginationOptions<TSchema, TFilters>): UseLocalPaginationReturnType<TSchema, TFilters> {
  const pagination = usePagination({
    id,
    defaultPaginationOptions,
    disableRouteQuery,
  })

  const paginationSort = computed<PaginationSort | undefined>(() => {
    return pagination.paginationOptions.value.sort
  })

  function sortItem(firstItem: TSchema, secondItem: TSchema): number {
    if (paginationSort.value?.key === undefined || paginationSort.value?.direction === undefined) {
      return 0
    }

    const sortKey = paginationSort.value?.key as keyof TSchema
    const sortDirection = paginationSort.value?.direction

    if (sortDirection === 'asc') {
      return firstItem[sortKey] > secondItem[sortKey] ? 1 : -1
    }

    return firstItem[sortKey] < secondItem[sortKey] ? 1 : -1
  }

  function searchItem(data: TSchema): boolean {
    const search = pagination.paginationOptions.value.search?.toLowerCase()

    if (search === undefined) {
      return true
    }

    return Object.values(data ?? {}).some((value) => value?.toString().toLowerCase().includes(search))
  }

  function filterItem(data: TSchema): boolean {
    const filters = Object.entries(pagination.paginationOptions.value.filters ?? {})

    return filters.every(([
      key,
      value,
    ]) => {
      const dataToSearch = data[key as keyof TSchema]

      if (typeof value === 'string') {
        return dataToSearch?.toString().toLowerCase().includes(value.toLowerCase())
      }

      if (Array.isArray(value)) {
        return value.includes(dataToSearch)
      }

      return dataToSearch === value
    })
  }

  return {
    data: computed<PaginatedData<TSchema>>(() => {
      const rawItems: TSchema[] = toValue(items)

      const paginationValue = pagination.paginationOptions.value.pagination

      const start = paginationValue.page * paginationValue.perPage
      const end = start + paginationValue.perPage

      const result = rawItems.filter((item) => filterItem(item))
        .filter((item) => searchItem(item))
        .sort((a, b) => sortItem(a, b))
        .slice(start, end)

      return {
        data: result,
        total: rawItems.length,
      }
    }),
    pagination: {
      clearFilters: pagination.clearFilters,
      handleFilterChange: pagination.handleFilterChange,
      handlePageChange: pagination.handlePageChange,
      handleSearchChange: pagination.handleSearchChange,
      handleSortChange: pagination.handleSortChange,
      paginationOptions: pagination.paginationOptions,
    },
  }
}
