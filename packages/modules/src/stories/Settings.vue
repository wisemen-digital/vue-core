<script setup lang="ts">
import {
  h,
  ref,
} from 'vue'

import {
  useAppearanceSetting,
  useFontSizeSetting,
  useHighContrastSetting,
  useKeyboardShortcutHintsSetting,
} from '@/modules/settings/default-preferences/index'
import SettingsSection from '@/modules/settings/parts/content/SettingsSection.vue'
import type { SettingsConfig } from '@/modules/settings/settings.type'
import Settings from '@/modules/settings/Settings.vue'
import SettingsDialog from '@/modules/settings/SettingsDialog.vue'

const initialDefaultSettingsState = ref<any>({
  appearance: 'dark',
  enableKeyboardShortcutHints: true,
  fontSize: 'default',
})

const config: SettingsConfig = {
  categories: [
    {
      title: 'General',
      views: [
        {
          id: 'account',
          title: 'Account',
          description: 'Manage your account settings like profile picture, name, email, ...',
          icon: 'stars',
          sections: [
            useAppearanceSetting(),
            useFontSizeSetting(),
            useKeyboardShortcutHintsSetting(),
            useHighContrastSetting(),
          ],
        },
        {
          id: 'notifications',
          title: 'Notifications',
          description: 'Manage your notifications settings',
          icon: 'search',
          sections: [
            {
              id: 'notifications2',
              title: 'Notifications',
              description: 'Manage your notifications',
              tags: [
                'hahahah',
              ],
              component: () => h(SettingsSection, 'helemaal custom'),
            },
          ],
        },
      ],
    },
  ],
}
</script>

<template>
  <SettingsDialog>
    <Settings
      v-model:default-preferences="initialDefaultSettingsState"
      :config="config"
    />
  </SettingsDialog>
</template>
