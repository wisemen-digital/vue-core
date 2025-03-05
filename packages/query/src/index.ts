import {
  useInfiniteKeyQuery,
  type UseInfiniteKeyQueryReturnType,
} from '@/composables/query/infiniteKeysetQuery.composable'
import { useInfiniteOffsetQuery } from '@/composables/query/infiniteOffsetQuery.composable'
import type {
  InfinitePaginatedData,
  PaginatedData,
} from '@/types/paginatedData.type'

import type { PaginationOptions } from '../../components/src'
import { usePagination } from '../../components/src/composables/pagination/pagination.composable'

export type { UseMutationReturnType } from './composables/mutation/mutation.composable'
export { useMutation } from './composables/mutation/mutation.composable'
export type { UseQueryOptions, UseQueryReturnType } from './composables/query/query.composable'
export { useQuery } from './composables/query/query.composable'
export type { QueryKeys } from './types/queryKeys.type'

interface TestFilters {
  employeeUuid: string
}

interface EmployeeIndex {
  uuid: string
  name: string
}

const offsetPagination = usePagination<TestFilters>({
  isRouteQueryEnabled: true,
  key: 'test',
  options: {
    pagination: {
      limit: 10,
      offset: 0,
      type: 'offset',
    },
  },
  type: 'offset',
})

const keysetPagination = usePagination<TestFilters>({
  isRouteQueryEnabled: true,
  key: 'test',
  options: {
    pagination: {
      key: null,
      limit: 10,
      type: 'keyset',
    },
  },
})

const keysetIndexQuery = useInfinitekeysetIndexQuery(keysetPagination.pagination)
const offsetIndexQuery = useInfiniteOffsetIndexQuery(offsetPagination.pagination)

function useInfinitekeysetIndexQuery(pagination: PaginationOptions<TestFilters>):
UseInfiniteKeyQueryReturnType<EmployeeIndex> {
  return useInfiniteKeyQuery({
    key: null,
    limit: keysetPagination.pagination.limit,
    queryFn: async ({ key }) => {
      return await EmployeeIndexService.getAll(pagination, key)
    },
    queryKey: {
      employeeUuid: {},
    },
  })
}

function useInfiniteOffsetIndexQuery(pagination: PaginationOptions<TestFilters>):
UseInfiniteKeyQueryReturnType<EmployeeIndex> {
  return useInfiniteOffsetQuery({
    limit: keysetPagination.pagination.limit,
    offset: keysetPagination.pagination.offset,
    queryFn: async ({ offset }) => {
      return await EmployeeIndexService.getAllOffset(pagination, offset)
    },
    queryKey: {
      employeeUuid: {},
    },
  })
}

class EmployeeIndexService {
  static async getAll(
    options: PaginationOptions<TestFilters>,
    key: never | null,
  ): Promise<InfinitePaginatedData<EmployeeIndex>> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [],
          meta: {
            next: key,
          },
        })
      }, 1000)
    })
  }

  static async getAllOffset(
    options: PaginationOptions<TestFilters>,
    offset: number,
  ): Promise<PaginatedData<EmployeeIndex>> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [],
          meta: {
            limit: options.pagination.limit,
            offset,
            total: 0,
          },
        })
      }, 1000)
    })
  }
}
