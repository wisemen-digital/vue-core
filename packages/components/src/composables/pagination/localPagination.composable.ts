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

  function filterItem(_data: TSchema): boolean {
    // TODO: Implement filtering
    return true
  }

  return {
    data: computed<PaginatedData<TSchema>>(() => {
      const rawItems: TSchema[] = toValue(items)

      const paginationValue = pagination.paginationOptions.value.pagination

      const start = paginationValue.page * paginationValue.perPage
      const end = start + paginationValue.perPage

      const result = rawItems.filter((item) => filterItem(item))
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
      handleSortChange: pagination.handleSortChange,
      paginationOptions: pagination.paginationOptions,
    },
  }
}
