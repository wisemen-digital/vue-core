import { useStorage } from '@vueuse/core'
import type { Ref } from 'vue'

export type Appearance = 'dark' | 'light' | 'system'

export function useDarkMode(): Ref<Appearance> {
  const appearance = useStorage<Appearance>('theme', () => 'light')

  return appearance
}
