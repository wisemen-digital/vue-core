import { useStorage } from '@vueuse/core'
import type { Ref } from 'vue'

export type Appearance = 'dark' | 'light' | 'system'

export function useAppearance(): Ref<Appearance> {
  const appearance = useStorage<Appearance>('theme', () => 'light')

  return appearance
}
