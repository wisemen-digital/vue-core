import { useLocalStorage } from '@vueuse/core'
import {
  computed,
  onMounted,
  type Ref,
} from 'vue'

interface UseDarkModeReturnType {
  isEnabled: Ref<boolean>
  disableDarkMode: () => void
  enableDarkMode: () => void
}

let observer: MutationObserver | null = null

function documentHasDarkModeClass(): boolean {
  return document.documentElement.classList.contains('dark')
}

export function useDarkMode(): UseDarkModeReturnType {
  const darkModeValue = useLocalStorage<boolean>('darkMode', false)

  if (observer === null) {
    observer = createObserver()

    observer.observe(document.documentElement, {
      attributeFilter: [
        'class',
      ],
      attributes: true,
    })
  }

  function createObserver(): MutationObserver {
    return new MutationObserver(updateDarkMode)
  }

  function updateDarkMode(): void {
    const isDarkMode = documentHasDarkModeClass()

    darkModeValue.value = isDarkMode
  }

  function enableDarkMode(): void {
    if (documentHasDarkModeClass()) {
      return
    }

    document.documentElement.classList.add('dark')
    darkModeValue.value = true
  }

  function disableDarkMode(): void {
    if (!documentHasDarkModeClass()) {
      return
    }

    document.documentElement.classList.remove('dark')
    darkModeValue.value = false
  }

  onMounted(() => {
    if (darkModeValue.value) {
      document.documentElement.classList.add('dark')
    }
  })

  return {
    isEnabled: computed<boolean>(() => darkModeValue.value),
    disableDarkMode,
    enableDarkMode,
  }
}
