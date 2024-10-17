import { useLocalStorage } from '@vueuse/core'
import {
  type Ref,
  watch,
} from 'vue'

interface UseDarkModeReturnType {
  isDarkMode: Ref<boolean>
}

export function useDarkMode(): UseDarkModeReturnType {
  const isDarkMode = useLocalStorage<boolean>('isDarkMode', false)

  watch(isDarkMode, (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, {
    immediate: true,
  })

  return {
    isDarkMode,
  }
}
