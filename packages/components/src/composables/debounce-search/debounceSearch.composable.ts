import { useDebounce } from '@vueuse/core'
import type {
  ComputedRef,
  Ref,
} from 'vue'
import {
  computed,
  ref,
  watch,
} from 'vue'

interface UseDebounceSearchOptions {
  defaultValue?: string
  onDebounceSearch: (value: string) => void
}

interface useDebounceSearchReturnType {
  isDebouncing: ComputedRef<boolean>
  debouncedSearch: Ref<string>
  search: Ref<string>
}

export function useDebounceSearch(options: UseDebounceSearchOptions): useDebounceSearchReturnType {
  const search = ref<string>(options.defaultValue ?? '')
  const debouncedSearch = useDebounce(search, 300)

  const isDebouncing = computed<boolean>(() => debouncedSearch.value !== search.value)

  watch(debouncedSearch, (value) => {
    options.onDebounceSearch(value)
  })

  return {
    isDebouncing,
    debouncedSearch,
    search,
  }
}
