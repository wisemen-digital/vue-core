<script setup lang="ts">
import type { DefaultSettings } from '@/modules/settings/defaultSetting.composable'
import SettingsContent from '@/modules/settings/parts/content/SettingsContent.vue'
import SettingsHeader from '@/modules/settings/parts/header/SettingsHeader.vue'
import SettingsRoot from '@/modules/settings/parts/SettingsRoot.vue'
import SettingsSidebar from '@/modules/settings/parts/sidebar/SettingsSidebar.vue'
import SettingsSidebarContent from '@/modules/settings/parts/sidebar/SettingsSidebarContent.vue'
import SettingsSidebarSearchInput from '@/modules/settings/parts/sidebar/SettingsSidebarSearchInput.vue'
import type { SettingsProps } from '@/modules/settings/settings.props'

const props = defineProps<SettingsProps>()

const defaultSettingsState = defineModel<DefaultSettings>('defaultSettingsState', { required: true })
</script>

<template>
  <SettingsRoot
    v-bind="props"
    v-model:default-settings-state="defaultSettingsState"
  >
    <SettingsSidebar>
      <SettingsSidebarSearchInput />
      <SettingsSidebarContent />
    </SettingsSidebar>

    <div class="bg-primary flex flex-col overflow-hidden">
      <SettingsHeader />
      <SettingsContent />
    </div>
  </SettingsRoot>
</template>
