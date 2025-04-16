import type {
  ComputedRef,
  Ref,
} from 'vue'

import { useContext } from '@/composables/context.composable'
import type { DefaultSettings } from '@/modules/settings/defaultSetting.composable'
import type {
  SettingsCategory,
  SettingsConfig,
  SettingsView,
} from '@/modules/settings/settings.type'
import type { SettingsHistory } from '@/modules/settings/settingsHistory.composable'

interface SettingsContext extends SettingsHistory {
  activeView: ComputedRef<SettingsView>
  config: ComputedRef<SettingsConfig>
  defaultSettingsState: Ref<DefaultSettings>
  filteredCategories: ComputedRef<SettingsCategory[]>
  searchTerm: Ref<string>
}

export const [
  useProvideSettingsContext,
  useInjectSettingsContext,
] = useContext<SettingsContext>('settingsContext')
