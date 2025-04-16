<script setup lang="ts">
import {
  h,
  ref,
} from 'vue'

import SettingsSection from '@/modules/settings/parts/content/SettingsSection.vue'
import { useAppearanceSection } from '@/modules/settings/sections/appearance/config'
import { useFontSizeSection } from '@/modules/settings/sections/font-size/config'
import { useKeyboardShortcutHintsSection } from '@/modules/settings/sections/keyboard-shortcut-hints/config'
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
            useAppearanceSection(),
            useFontSizeSection(),
            useKeyboardShortcutHintsSection(),
            // {
            //   id: 'profile',
            //   title: 'Profile picture',
            //   description: 'Change your profile picture',
            //   tags: [
            //     'profile image',
            //   ],
            //   component: () => h(GeneralSettings),
            // },
          ],
        },
        {
          id: 'notifications',
          title: 'Notifications',
          description: 'Manage your notifications settings',
          icon: 'search',
          sections: [
            {
              id: 'notifications',
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

function onDefaultSettingChanged(key: string, value: unknown): void {
  console.log(key, value)
}
</script>

<template>
  <SettingsDialog>
    <Settings
      v-model:default-settings-state="initialDefaultSettingsState"
      :config="config"
      @default-setting-changed="onDefaultSettingChanged"
    />
  </SettingsDialog>
</template>
