import {
  describe,
  expect,
  it,
} from 'vitest'
import { computed } from 'vue'

import { useLocalPagination } from '@/composables/pagination/localPagination.composable'

describe('localPagination', () => {
  it('should init pagination with default options', () => {
    const localPagination = useLocalPagination({
      id: 'test',
      disableRouteQuery: true,
      items: computed<string[]>(() => []),
    })

    const expectedResult = {
      filters: {},
      pagination: {
        page: 0,
        perPage: 20,
      },
      search: undefined,
      sort: undefined,
      staticFilters: {},
    }

    expect(localPagination.pagination.paginationOptions.value).toStrictEqual(expectedResult)
  })

  it('should sort items', () => {
    const items = computed<{ name: string, age: number }[]>(() => [
      { name: 'b', age: 2 },
      { name: 'a', age: 1 },
    ])

    const localPagination = useLocalPagination({
      id: 'test',
      disableRouteQuery: true,
      items,
    })

    localPagination.pagination.paginationOptions.value.sort = {
      direction: 'asc',
      key: 'name',
    }

    expect(localPagination.data.value.data).toStrictEqual([
      { name: 'a', age: 1 },
      { name: 'b', age: 2 },
    ])
  })

  it('should filter items using search', () => {
    const items = computed<{ name: string, age: number }[]>(() => [
      { name: 'John', age: 2 },
      { name: 'Eric', age: 1 },
    ])

    const localPagination = useLocalPagination({
      id: 'test',
      disableRouteQuery: true,
      items,
    })

    localPagination.pagination.handleSearchChange('john')

    expect(localPagination.data.value.data).toStrictEqual([
      { name: 'John', age: 2 },
    ])
  })

  it('should filters items with an exact match', () => {
    const items = computed<{ name: string, age: number }[]>(() => [
      { name: 'John', age: 2 },
      { name: 'Stacey', age: 3 },
      { name: 'Eric', age: 1 },
    ])

    const localPagination = useLocalPagination({
      id: 'test',
      disableRouteQuery: true,
      items,
    })

    localPagination.pagination.handleFilterChange({ age: 2 })

    expect(localPagination.data.value.data).toStrictEqual([
      { name: 'John', age: 2 },
    ])
  })

  it('should filter items using multiple filters', () => {
    const items = computed<{ name: string, age: number, birthday: string }[]>(() => [
      { name: 'John', age: 2, birthday: '2000-01-01' },
      { name: 'Stacey', age: 2, birthday: '2000-05-05' },
      { name: 'Eric', age: 1, birthday: '2000-12-12' },
    ])

    const localPagination = useLocalPagination({
      id: 'test',
      disableRouteQuery: true,
      items,
    })

    localPagination.pagination.handleFilterChange({ age: 2 })
    localPagination.pagination.handleFilterChange({ birthday: '2000-05-05' })

    expect(localPagination.data.value.data).toStrictEqual([
      { name: 'Stacey', age: 2, birthday: '2000-05-05' },
    ])
  })

  it('should filter items that are an array', () => {
    const items = computed<{ name: string, age: number, hobbies: string[] }[]>(() => [
      { name: 'John', age: 2, hobbies: [
        'reading',
        'running',
      ] },
      { name: 'Stacey', age: 2, hobbies: [
        'reading',
        'swimming',
      ] },
      { name: 'Eric', age: 1, hobbies: [
        'reading',
        'running',
      ] },
    ])

    const localPagination = useLocalPagination({
      id: 'test',
      disableRouteQuery: true,
      items,
    })

    localPagination.pagination.handleFilterChange({ hobbies: 'running' })

    expect(localPagination.data.value.data).toStrictEqual([
      { name: 'John', age: 2, hobbies: [
        'reading',
        'running',
      ] },
      { name: 'Eric', age: 1, hobbies: [
        'reading',
        'running',
      ] },
    ])
  })
})
