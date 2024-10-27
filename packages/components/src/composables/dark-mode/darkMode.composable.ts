import { useLocalStorage } from '@vueuse/core'
import {
  computed,
  type ComputedRef,
  onMounted,
  onUnmounted,
  watch,
} from 'vue'

interface UseDarkModeReturnType {
  isEnabled: ComputedRef<boolean>
  disable: () => void
  enable: () => void
}

export function useDarkMode(): UseDarkModeReturnType {
  const isDarkMode = useLocalStorage('isDarkMode', false)

  function updateDarkModeState(): void {
    isDarkMode.value = document.documentElement.classList.contains('dark')
  }

  function enableDarkMode(): void {
    document.documentElement.classList.add('dark')
    isDarkMode.value = true
  }

  function disableDarkMode(): void {
    document.documentElement.classList.remove('dark')
    isDarkMode.value = false
  }

  // function syncWithSystem(): void {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     enableDarkMode()
  //   }
  //   else {
  //     disableDarkMode()
  //   }
  // }

  const observer = new MutationObserver(updateDarkModeState)

  onMounted(() => {
    if (isDarkMode.value) {
      enableDarkMode()
    }
    else {
      disableDarkMode()
    }

    observer.observe(document.documentElement, { attributeFilter: [
      'class',
    ], attributes: true })
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  watch(isDarkMode, (newVal) => {
    if (newVal) {
      enableDarkMode()
    }
    else {
      disableDarkMode()
    }
  })

  return {
    isEnabled: computed<boolean>(() => isDarkMode.value),
    disable: disableDarkMode,
    enable: enableDarkMode,
  }
}
