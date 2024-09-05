import type { Ref } from 'vue'
import { ref } from 'vue'

interface Loading {
  setState: (value: boolean) => void
  state: Ref<boolean>
}

export function useLoading(): Loading {
  const state = ref<boolean>(false)

  function setState(value: boolean): void {
    state.value = value
  }

  return {
    setState,
    state,
  }
}
