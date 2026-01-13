import type { Result } from 'neverthrow'

export interface ApiErrorCodes {}

export type ApiErrorCode = ApiErrorCodes[keyof ApiErrorCodes]
export interface ApiKnownErrorObject {
  code: ApiErrorCode
  detail: string
  source?: {
    pointer: string
  }
  status: string

}

export interface ApiUnknownErrorObject {
  code: string
  detail: string
  source?: {
    pointer: string
  }
  status: string

}

export type ApiErrorObject = ApiKnownErrorObject | ApiUnknownErrorObject

export interface ApiExpectedError {
}

export type ApiUnexpectedError = Error
export type ApiError = ApiExpectedError | ApiUnexpectedError
export type ApiResult<T> = Result<T, ApiError>
