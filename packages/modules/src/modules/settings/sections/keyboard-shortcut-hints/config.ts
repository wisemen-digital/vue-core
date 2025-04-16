import { h } from 'vue'
import { useI18n } from 'vue-i18n'

import SettingsKeyboardShortcutHintsSection from '@/modules/settings/sections/keyboard-shortcut-hints/SettingsKeyboardShortcutHintsSection.vue'
import type { SettingsSection } from '@/modules/settings/settings.type'

export function useKeyboardShortcutHintsSection(): SettingsSection {
  const { t } = useI18n()

  return {
    id: 'keyboard-shortcut-hints',
    title: t('module.settings.section.keyboard_shortcut_hints.title'),
    description: t('module.settings.section.keyboard_shortcut_hints.description'),
    tags: [],
    component: () => h(SettingsKeyboardShortcutHintsSection),
  }
}
