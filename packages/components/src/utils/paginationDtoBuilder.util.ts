import type { PaginationOptions } from '@wisemen/vue-core'

const DEFAULT_OFFSET = 0
const DEFAULT_LIMIT = 20

export type PaginationParams<TFilterSchema> = {
  filter: Partial<TFilterSchema>
  search?: string
  sort?: {
    field: string
    order: 'asc' | 'desc'
  }[]
} & {
  pagination: {
    limit: number
    offset: number
  }
}

interface PaginationSort {
  direction: 'asc' | 'desc'
  key: string
}

export class PaginationDtoBuilder<TFilterSchema> {
  private paginationOptions: PaginationParams<TFilterSchema>

  constructor(paginationOptions?: PaginationOptions<TFilterSchema>) {
    const limit = (paginationOptions?.pagination.limit ?? DEFAULT_LIMIT)
    const offset = (paginationOptions?.pagination.offset ?? DEFAULT_OFFSET)

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
    } as PaginationParams<TFilterSchema>

    Object.entries(allFilters).forEach(([
      key,
      value,
    ]) => {
      this.withFilter(key as keyof TFilterSchema, value as TFilterSchema[keyof TFilterSchema])
    })

    if (paginationOptions?.sort !== undefined) {
      this.withSort({
        direction: paginationOptions.sort.direction,
        key: paginationOptions.sort.key,
      })
    }
  }

  public build<TFilterSchemaDto>(transformer: (filters: TFilterSchema)
  => TFilterSchemaDto): PaginationParams<TFilterSchemaDto> {
    return {
      ...this.paginationOptions,
      filter: transformer(this.paginationOptions.filter as TFilterSchema),
    }
  }

  public withFilter<TKey extends keyof TFilterSchema>(
    key: TKey,
    value: TFilterSchema[TKey] | null | undefined,
  ): PaginationDtoBuilder<TFilterSchema> {
    if (value !== null && value !== '') {
      this.paginationOptions.filter = {
        ...this.paginationOptions.filter,
        [key]: value,
      }
    }

    return this
  }

  public withLimit(limit: number): PaginationDtoBuilder<TFilterSchema> {
    this.paginationOptions.pagination.limit = limit

    return this
  }

  public withOffset(offset: number): PaginationDtoBuilder<TFilterSchema> {
    this.paginationOptions.pagination.offset = offset

    return this
  }

  public withSearch(search: string): PaginationDtoBuilder<TFilterSchema> {
    this.paginationOptions.search = search

    return this
  }

  public withSort(sort: PaginationSort): PaginationDtoBuilder<TFilterSchema> {
    this.paginationOptions.sort = [
      {
        field: sort.key,
        order: sort.direction,
      },
    ]

    return this
  }
}
