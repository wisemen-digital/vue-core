const DEFAULT_LIMIT = 20
const DEFAULT_PREFETCH_STALE_TIME = 60

export const QUERY_CONFIG = {
  prefetchStaleTime: DEFAULT_PREFETCH_STALE_TIME,
  limit: DEFAULT_LIMIT,
}

export interface QueryConfig {
  /*
  * Time (in seconds) before a prefetch query is considered stale
  * After this time, the query will be refetched automatically in the background when it is rendered or accessed
  * @default 60
  */
  prefetchStaleTime: number
  /*
  * Default limit for pagination queries
  * @default 20
  */
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
