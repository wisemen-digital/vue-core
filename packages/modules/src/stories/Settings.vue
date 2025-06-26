<script setup lang="ts">
import type { Component } from 'vue'
import {
  computed,
  h,
  ref,
} from 'vue'

import {
  useAppearanceSetting,
  useFontSizeSetting,
  useHighContrastSetting,
  useKeyboardShortcutHintsSetting,
} from '@/modules/settings/default-preferences/index'
import { useLanguageSetting } from '@/modules/settings/default-preferences/language/config'
import SettingsSection from '@/modules/settings/parts/content/SettingsSection.vue'
import type { SettingsConfig } from '@/modules/settings/settings.type'
import Settings from '@/modules/settings/Settings.vue'
import SettingsDialog from '@/modules/settings/SettingsDialog.vue'

const initialDefaultSettingsState = ref<any>({
  appearance: 'dark',
  enableKeyboardShortcutHints: true,
  fontSize: 'default',
  language: 'en-US',
})

const config = {
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
            useLanguageSetting(),
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
              title: computed<string>(() => 'Notifications'),
              description: computed<string>(() => 'Manage your notifications'),
              tags: [
                'hahahah',
              ],
              component: (): Component => h(SettingsSection, 'helemaal custom'),
            },
          ],
        },
        {
          id: 'notifications2',
          title: 'Notifications',
          description: 'Manage your notifications settings',
          icon: 'search',
          sections: [
            {
              id: 'notifications4',
              title: 'Notifications',
              description: 'Manage your notifications',
              tags: [
                'hahahah',
              ],
              component: (): Component => h(SettingsSection, 'helemaal custom'),
            },
          ],
        },
        {
          id: 'notifications8',
          title: 'Notifications',
          description: 'Manage your notifications settings',
          icon: 'search',
          sections: [
            {
              id: 'notifications23',
              title: 'Notifications',
              description: 'Manage your notifications',
              tags: [
                'hahahah',
              ],
              component: (): Component => h(SettingsSection, 'helemaal custom'),
            },
          ],
        },
      ],
    },
    {
      title: 'Something',
      views: [],
    },
    {
      title: 'AHAHAH',
      views: [],
    },
    {
      title: 'sjdkskdksjskj',
      views: [],
    },
    {
      title: 'sjdkskdksjskj',
      views: [],
    },
    {
      title: 'sjdkskdksjskj',
      views: [],
    },
    {
      title: 'sjdkskdksjskj',
      views: [],
    },
  ],
} as const satisfies SettingsConfig
</script>

<template>
  <SettingsDialog>
    <Settings
      v-model:default-preferences="initialDefaultSettingsState"
      :config="config"
    />
  </SettingsDialog>
</template>
