import { useStorage } from '@vueuse/core'
import type { Ref } from 'vue'

export type DarkModeValue = 'dark' | 'light' | 'system'

export function useDarkMode(): Ref<DarkModeValue> {
  const darkModeValue = useStorage<DarkModeValue>('theme', () => 'light')

  return darkModeValue
}
