const DEFAULT_LIMIT = 20

export const QUERY_CONFIG = {
  limit: DEFAULT_LIMIT,
}

export interface QueryConfig {
  limit: number
}
export function setQueryConfig(config: Partial<QueryConfig>): void {
  if (config.limit != null && config.limit > 0) {
    QUERY_CONFIG.limit = config.limit
  }
}
