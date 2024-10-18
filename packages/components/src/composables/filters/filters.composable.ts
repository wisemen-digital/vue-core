import type { SelectValue } from '@/types'
import type { Filter } from '@/types/filter.type'

interface UseFiltersOptions<TValue extends SelectValue> {
  items: Filter<TValue>[]
}

export function useFilters<TValue extends SelectValue>(options: UseFiltersOptions<TValue>): void {
  //
}
