import { h } from 'vue'
import { useI18n } from 'vue-i18n'

import SettingsFontSizeSection from '@/modules/settings/sections/font-size/SettingsFontSizeSection.vue'
import type { SettingsSection } from '@/modules/settings/settings.type'

export function useFontSizeSection(): SettingsSection {
  const { t } = useI18n()

  return {
    id: 'font-size',
    title: t('module.settings.section.font_size.title'),
    description: t('module.settings.section.font_size.description'),
    tags: [],
    component: () => h(SettingsFontSizeSection),
  }
}
