import type { EnumType } from 'typescript'

const DEFAULT_LIMIT = 20

export const QUERY_CONFIG = {
  limit: DEFAULT_LIMIT,
}

export interface QueryConfig<TErrorCodes extends EnumType> {
  apiErrorCodes: TErrorCodes
  limit: number
}
export function setQueryConfig<TErrorCodes extends EnumType>(config: Partial<QueryConfig<TErrorCodes>>): void {
  if (config.limit != null && config.limit > 0) {
    QUERY_CONFIG.limit = config.limit
  }
}

setQueryConfig({
  limit: DEFAULT_LIMIT,
})
