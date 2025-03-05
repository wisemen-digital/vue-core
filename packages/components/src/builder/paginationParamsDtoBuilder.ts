import type {
  PaginationOptions,
  PaginationSortOrder,
} from '@/types/pagination.type'

const DEFAULT_OFFSET = 0
const DEFAULT_LIMIT = 20

export interface PaginationParamsDto<TFilterSchema> {
  filter: TFilterSchema
  pagination: {
    limit: number
    offset: number
  }
  search?: string
  sort?: PaginationSort[]
}

interface PaginationSort {
  key: string
  order: PaginationSortOrder
}

export class PaginationParamsDtoBuilder<TFilterSchema> {
  private paginationOptions: PaginationParamsDto<TFilterSchema>

  constructor(paginationOptions?: PaginationOptions<TFilterSchema>) {
    const limit = (paginationOptions?.pagination.limit ?? DEFAULT_LIMIT)

    const allFilters = {
      ...paginationOptions?.filters ?? {},
      ...paginationOptions?.staticFilters ?? {},
    }

    this.paginationOptions = {
      pagination: paginationOptions?.pagination.type === 'offset'
        ? {
            limit,
            offset: (paginationOptions?.pagination.offset ?? DEFAULT_OFFSET) * limit,
          }
        : {
            key: paginationOptions?.pagination.key,
            limit,
          },
      search: paginationOptions?.search,
    } as PaginationParamsDto<TFilterSchema>

    Object.entries(allFilters).forEach(([
      key,
      value,
    ]) => {
      this.withFilter(key as keyof TFilterSchema, value as TFilterSchema[keyof TFilterSchema])
    })

    if (paginationOptions?.sort !== undefined) {
      this.withSort({
        key: paginationOptions.sort.key,
        order: paginationOptions.sort.direction,
      })
    }
  }

  public build<TFilterSchemaDto>(transformer: (filters: TFilterSchema)
  => TFilterSchemaDto): PaginationParamsDto<TFilterSchemaDto> {
    return {
      ...this.paginationOptions,
      filter: transformer(this.paginationOptions.filter as TFilterSchema),
    }
  }

  public withFilter<TKey extends keyof TFilterSchema>(
    key: TKey,
    value: TFilterSchema[TKey] | null | undefined,
  ): PaginationParamsDtoBuilder<TFilterSchema> {
    if (value !== null && value !== '') {
      this.paginationOptions.filter = {
        ...this.paginationOptions.filter,
        [key]: value,
      }
    }

    return this
  }

  public withLimit(limit: number): PaginationParamsDtoBuilder<TFilterSchema> {
    this.paginationOptions.pagination.limit = limit

    return this
  }

  public withOffset(offset: number): PaginationParamsDtoBuilder<TFilterSchema> {
    this.paginationOptions.pagination.offset = offset

    return this
  }

  public withSearch(search: string): PaginationParamsDtoBuilder<TFilterSchema> {
    this.paginationOptions.search = search

    return this
  }

  public withSort(sort: PaginationSort): PaginationParamsDtoBuilder<TFilterSchema> {
    this.paginationOptions.sort = [
      {
        key: sort.key,
        order: sort.order,
      },
    ]

    return this
  }
}
