import type {
  SettingsConfig,
  ViewIdFromConfig,
} from '@/modules/settings/settings.type'

export interface SettingsProps<TConfig extends SettingsConfig> {
  activeView?: ViewIdFromConfig<TConfig>
  config: TConfig
}
