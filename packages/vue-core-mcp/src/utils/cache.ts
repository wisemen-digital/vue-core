import { createHash } from 'node:crypto'

const cache = new Map<string, unknown>()

export async function memoizeAsync<T>(key: string, factory: () => Promise<T>): Promise<T> {
  if (cache.has(key)) {
    return cache.get(key) as T
  }

  const value = await factory()
  cache.set(key, value)
  return value
}

export function memoizeSync<T>(key: string, factory: () => T): T {
  if (cache.has(key)) {
    return cache.get(key) as T
  }

  const value = factory()
  cache.set(key, value)
  return value
}

export function getCached<T>(key: string): T | undefined {
  return cache.get(key) as T | undefined
}

export function setCache<T>(key: string, value: T): void {
  cache.set(key, value)
}

export function resetCache(): void {
  cache.clear()
}

export function hashContent(content: unknown): string {
  const hash = createHash('sha256')
  if (typeof content === 'string' || content instanceof Buffer) {
    hash.update(content)
  }
  else {
    hash.update(JSON.stringify(content))
  }

  return hash.digest('hex')
}
