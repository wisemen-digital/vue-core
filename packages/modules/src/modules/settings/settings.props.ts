import type { SettingsConfig } from '@/modules/settings/types/settings.type'

type SettingsMode = 'dialog' | 'inline'

export interface SettingsProps {
  config: SettingsConfig
  mode: SettingsMode
}
