import type {
  ComputedRef,
  Ref,
} from 'vue'

import { useContext } from '@/composables/context.composable'
import type { SettingsHistory } from '@/modules/settings/settingsHistory.composable'
import type {
  SettingsCategory,
  SettingsConfig,
  SettingsView,
} from '@/modules/settings/types/settings.type'

interface SettingsContext extends SettingsHistory {
  activeView: ComputedRef<SettingsView>
  config: ComputedRef<SettingsConfig>
  filteredCategories: ComputedRef<SettingsCategory[]>
  searchTerm: Ref<string>
}

export const [
  useProvideSettingsContext,
  useInjectSettingsContext,
] = useContext<SettingsContext>('settingsContext')
