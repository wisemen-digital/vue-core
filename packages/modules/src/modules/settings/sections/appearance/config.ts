import { h } from 'vue'
import { useI18n } from 'vue-i18n'

import SettingsAppearanceSection from '@/modules/settings/sections/appearance/SettingsAppearanceSection.vue'
import type { SettingsSection } from '@/modules/settings/settings.type'

export function useAppearanceSection(): SettingsSection {
  const { t } = useI18n()

  return {
    id: 'appearance',
    title: t('module.settings.section.appearance.title'),
    description: t('module.settings.section.appearance.description'),
    tags: [
      t('module.settings.section.appearance.option.light_mode'),
      t('module.settings.section.appearance.option.dark_mode'),
      t('module.settings.section.appearance.option.system_preference'),
    ],
    component: () => h(SettingsAppearanceSection),
  }
}
