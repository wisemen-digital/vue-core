import type {
  PaginationOptions,
  PaginationSchema,
} from '@/types'

const DEFAULT_OFFSET = 0
const DEFAULT_LIMIT = 20

enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

interface PaginationSort<TSortKey> {
  key: TSortKey
  order: SortDirection
}

interface PaginationDtoParams<TPaginationSchema extends PaginationSchema> {
  filter: TPaginationSchema['filters']
  pagination: {
    limit: number
    offset: number
  }
  search?: string
  sort: {
    key: TPaginationSchema['sortKeys']
    order: SortDirection
  }[]
}

export class PaginationDtoBuilder<TPaginationSchema extends PaginationSchema> {
  private paginationOptions: PaginationDtoParams<TPaginationSchema>

  constructor(paginationOptions?: PaginationOptions<TPaginationSchema>) {
    const limit = (paginationOptions?.pagination.limit ?? DEFAULT_LIMIT)
    const offset = (paginationOptions?.pagination.offset ?? DEFAULT_OFFSET) * limit

    const allFilters = {
      ...paginationOptions?.filters ?? {},
      ...paginationOptions?.staticFilters ?? {},
    }

    this.paginationOptions = {
      pagination: {
        limit,
        offset,
      },
      search: paginationOptions?.search,
    } as PaginationDtoParams<TPaginationSchema>

    Object.entries(allFilters).forEach(([
      key,
      value,
    ]) => {
      this.withFilter(
        key as keyof TPaginationSchema['filters'],
        value as TPaginationSchema['filters'][keyof TPaginationSchema['filters']],
      )
    })

    if (paginationOptions?.sort !== undefined && paginationOptions.sort.length > 0) {
      this.withSort(paginationOptions.sort as PaginationSort<`${TPaginationSchema['sortKeys']}`>[])
    }
  }

  public build<TFilterSchemaDto>(transformer: (filters: TPaginationSchema['filters'])
  => TFilterSchemaDto): PaginationDtoParams<TPaginationSchema> {
    return {
      ...this.paginationOptions,
      filter: transformer(this.paginationOptions.filter as TPaginationSchema['filters']),
      sort: this.paginationOptions.sort,
    } as PaginationDtoParams<TPaginationSchema>
  }

  public withFilter<TKey extends keyof TPaginationSchema['filters']>(
    key: TKey,
    value: TPaginationSchema['filters'][TKey] | null | undefined,
  ): PaginationDtoBuilder<TPaginationSchema> {
    if (value !== null && value !== '') {
      this.paginationOptions.filter = {
        ...this.paginationOptions.filter,
        [key]: value,
      }
    }

    return this
  }

  public withLimit(limit: number): PaginationDtoBuilder<TPaginationSchema> {
    this.paginationOptions.pagination.limit = limit

    return this
  }

  public withOffset(offset: number): PaginationDtoBuilder<TPaginationSchema> {
    this.paginationOptions.pagination.offset = offset

    return this
  }

  public withSearch(search: string): PaginationDtoBuilder<TPaginationSchema> {
    this.paginationOptions.search = search

    return this
  }

  public withSort(sort: PaginationSort<`${TPaginationSchema['sortKeys']}`>[]): PaginationDtoBuilder<TPaginationSchema> {
    this.paginationOptions.sort = sort.map((sortItem) => ({
      key: sortItem.key,
      order: sortItem.order,
    }))

    return this
  }
}
