import type { Ref } from 'vue'
import { ref } from 'vue'

interface Loading {
  isLoading: Ref<boolean>
  setLoadingState: (value: boolean) => void
}

export function useLoading(): Loading {
  const isLoading = ref<boolean>(false)

  function setLoadingState(value: boolean): void {
    isLoading.value = value
  }

  return {
    isLoading,
    setLoadingState,
  }
}
