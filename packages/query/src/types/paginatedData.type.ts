export interface PaginatedData<TSchema> {
  data: TSchema[]
  meta: {
    limit: number
    offset: number
    total: number
  }
}

export interface InfinitePaginatedData<TSchema> {
  data: TSchema[]
  meta: {
    next: never | null
  }
}
