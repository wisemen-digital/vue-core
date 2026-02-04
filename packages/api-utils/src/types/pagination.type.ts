import type { ApiResult } from './apiError.type'
import type { QueryParams } from './query.type'

export interface OffsetPaginationParams {
  limit: number
  offset: number
}

export type OffsetPagination<T extends QueryParams = Record<string, never>> = {
  pagination: OffsetPaginationParams
} & T

export interface KeysetPaginationParams {
  key?: any
  limit: number
}

export type KeysetPagination<T extends QueryParams> = {
  pagination: KeysetPaginationParams
} & T

export interface OffsetPaginationResponse<TData> {
  data: TData[]
  meta: {
    limit: number
    offset: number
    total: number
  }
}

export interface KeysetPaginationResponse<TData> {
  data: TData[]
  meta: {
    next: unknown
  }
}
export type OffsetPaginationResult<TData, TErrorCode extends string = string>
  = ApiResult<OffsetPaginationResponse<TData>, TErrorCode>
export type KeysetPaginationResult<TData, TErrorCode extends string = string>
  = ApiResult<KeysetPaginationResponse<TData>, TErrorCode>

export interface PaginatedDataDto<TSchema> {
  items: TSchema[]
  meta: {
    limit: number
    offset: number
    total: number
  }
}
