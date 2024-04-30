import {
  type Ref,
  ref,
  watch,
} from 'vue'

interface UseDebounceSearchReturnType {
  isDebouncing: Ref<boolean>
  debouncedSearch: Ref<string>
  search: Ref<string>
}

export function useDebounceSearch(
  onDebounceSearch: (search: string) => void,
  debounceTime?: number,
): UseDebounceSearchReturnType {
  const search = ref<string>('')
  const debouncedSearch = ref<string>(search.value)
  const isDebouncing = ref<boolean>(false)

  let timeout: ReturnType<typeof setTimeout> | null = null

  watch(search, () => {
    isDebouncing.value = true

    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      debouncedSearch.value = search.value
      isDebouncing.value = false

      onDebounceSearch(search.value)
    }, debounceTime)
  })

  return {
    isDebouncing,
    debouncedSearch,
    search,
  }
}
