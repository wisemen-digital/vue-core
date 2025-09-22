const DEFAULT_LIMIT = 20
const DEFAULT_PREFETCH_STALE_TIME = 60

export const QUERY_CONFIG = {
  limit: DEFAULT_LIMIT,
}

export interface QueryConfig {
  prefetchStaleTime: number
  limit: number
}
export function setQueryConfig(config: Partial<QueryConfig>): void {
  if (config.limit != null && config.limit > 0) {
    QUERY_CONFIG.limit = config.limit
  }
  if (config.prefetchStaleTime != null && config.prefetchStaleTime > 0) {
    QUERY_CONFIG.prefetchStaleTime = config.prefetchStaleTime
  }
}
