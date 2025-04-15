<script setup lang="ts">
import { h } from 'vue'

import SettingsAppearanceSection from '@/modules/settings/sections/appearance/SettingsAppearanceSection.vue'
import Settings from '@/modules/settings/Settings.vue'
import SettingsDialog from '@/modules/settings/SettingsDialog.vue'
import GeneralSettings from '@/modules/settings/stories/GeneralSettings.vue'
import type { SettingsConfig } from '@/modules/settings/types/settings.type'

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
            {
              title: 'Appearance',
              description: 'Change the appearance of the app',
              tags: [],
              component: () => h(SettingsAppearanceSection),
            },
            {
              title: 'Profile picture',
              description: 'Change your profile picture',
              tags: [
                'profile image',
              ],
              component: () => h(GeneralSettings, () => 'Profile picture'),
            },
          ],
        },
        {
          id: 'notifications',
          title: 'Notifications',
          description: 'Manage your notifications settings',
          icon: 'search',
          sections: [
            {
              title: 'Notifications',
              description: 'Manage your notifications',
              tags: [],
              component: () => h('div', 'Notifications'),
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
      :config="config"
      mode="dialog"
    />
  </SettingsDialog>
</template>
