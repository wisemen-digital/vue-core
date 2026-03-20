import type { RedisClientOptions } from 'redis'

export interface RedisModuleOptions extends RedisClientOptions {
  url: string
  onClientError?: (error: unknown) => void
  prefix?: string
  ttl?: number
}
