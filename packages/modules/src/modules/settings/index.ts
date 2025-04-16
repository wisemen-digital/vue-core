export type { DefaultSettings } from '@/modules/settings/defaultSetting.composable'
export { default as VcSettingsSection } from '@/modules/settings/parts/content/SettingsSection.vue'
export * from '@/modules/settings/sections/index'
export type {
  SettingsCategory,
  SettingsConfig,
  SettingsSection,
  SettingsView,
} from '@/modules/settings/settings.type'
export { default as VcSettings } from '@/modules/settings/Settings.vue'
export { default as VcSettingsDialog } from '@/modules/settings/SettingsDialog.vue'
