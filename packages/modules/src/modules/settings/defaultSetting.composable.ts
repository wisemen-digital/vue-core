import type { ComputedRef } from 'vue'
import { computed } from 'vue'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'

export interface DefaultSettings {
  appearance: 'dark' | 'light' | 'system'
  enableKeyboardShortcutHints: boolean
  fontSize: 'default' | 'large' | 'larger' | 'small' | 'smaller'
}

export function useDefaultSetting<
  TKey extends keyof DefaultSettings,
>(key: TKey): ComputedRef<DefaultSettings[TKey]> {
  const { defaultSettingsState } = useInjectSettingsContext()

  const value = computed<DefaultSettings[TKey]>({
    get: () => defaultSettingsState.value[key],
    set: (newValue) => {
      defaultSettingsState.value[key] = newValue
    },
  })

  return value
}
