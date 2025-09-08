import { useQueryClient } from '@tanstack/vue-query'

import type { UseQueryOptions } from './query.composable'

const DEFAULT_STALE_TIME = 60

export function usePrefetchQuery<TResData>(query: UseQueryOptions<TResData>) {
  const queryClient = useQueryClient()

  function getQueryKey(): unknown[] {
    const entries = Object.entries(query.queryKey)
    const [
      first,
    ] = entries

    if (!first) {
      return []
    }
    const [
      queryKey,
      params,
    ] = first as [string, unknown]

    return [
      queryKey,
      params,
    ]
  }

  async function execute(): Promise<void> {
    await queryClient.prefetchQuery({
      staleTime: query.staleTime ?? DEFAULT_STALE_TIME,
      queryFn: query.queryFn,
      queryKey: getQueryKey(),
    })
  }

  return {
    execute,
  }
}
