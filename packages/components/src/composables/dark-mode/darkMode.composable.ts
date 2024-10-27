import { useLocalStorage } from '@vueuse/core'
import {
  computed,
  type ComputedRef,
  onBeforeUnmount,
  onMounted,
  type Ref,
  ref,
  watch,
} from 'vue'

interface UseDarkModeReturnType {
  /**
   * Whether the dark mode is enabled in the application.
   */
  isEnabled: ComputedRef<boolean>
  /**
   * Whether the system has a dark mode preference enabled.
   * This does not mean that the dark mode is enabled in the application.
   */
  isSystemDarkMode: ComputedRef<boolean>
  /**
   * The value of the dark mode.
   * Can be 'dark', 'light' or 'system'.
   */
  value: Ref<'dark' | 'light' | 'system'>
}

export function useDarkMode(): UseDarkModeReturnType {
  const darkModeValue = useLocalStorage<'dark' | 'light' | 'system'>('theme', 'light')
  const isSystemDarkMode = ref<boolean>(systemHasDarkMode())

  function systemHasDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  function updateDarkModeState(): void {
    if (darkModeValue.value === 'dark' || (isSystemDarkMode.value && darkModeValue.value === 'system')) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }

  watch(darkModeValue, updateDarkModeState)

  onMounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      isSystemDarkMode.value = systemHasDarkMode()
      updateDarkModeState()
    })
  })

  onBeforeUnmount(() => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      isSystemDarkMode.value = systemHasDarkMode()
      updateDarkModeState()
    })
  })

  return {
    isEnabled: computed<boolean>(
      () => darkModeValue.value === 'dark' || (darkModeValue.value === 'system' && isSystemDarkMode.value),
    ),
    isSystemDarkMode: computed<boolean>(() => isSystemDarkMode.value),
    value: darkModeValue,
  }
}
