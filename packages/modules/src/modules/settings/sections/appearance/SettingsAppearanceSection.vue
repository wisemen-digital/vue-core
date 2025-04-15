<script setup lang="ts">
import {
  VcRadioGroup,
  VcThemeProvider,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

import SettingsSection from '@/modules/settings/parts/content/SettingsSection.vue'
import SettingsAppearanceMiniDashboard from '@/modules/settings/sections/appearance/SettingsAppearanceMiniDashboard.vue'
import SettingsAppearanceRadioGroupItem from '@/modules/settings/sections/appearance/SettingsAppearanceRadioGroupItem.vue'

const value = ref<'dark' | 'light' | 'system'>('light')
</script>

<template>
  <SettingsSection :is-single-column-layout="true">
    <VcRadioGroup v-model="value">
      <div class="gap-xl grid grid-cols-3">
        <SettingsAppearanceRadioGroupItem
          label="Light mode"
          value="light"
        >
          <VcThemeProvider
            appearance="light"
            class="bg-secondary relative h-30"
          >
            <SettingsAppearanceMiniDashboard
              class="absolute top-1/6 left-1/10"
            />
          </VcThemeProvider>
        </SettingsAppearanceRadioGroupItem>

        <SettingsAppearanceRadioGroupItem
          value="dark"
          label="Dark mode"
        >
          <VcThemeProvider
            appearance="dark"
            class="bg-secondary relative h-30"
          >
            <SettingsAppearanceMiniDashboard
              class="absolute top-1/6 left-1/10"
            />
          </VcThemeProvider>
        </SettingsAppearanceRadioGroupItem>

        <SettingsAppearanceRadioGroupItem
          value="system"
          label="System preferences"
        >
          <VcThemeProvider
            appearance="light"
            class="relative z-2 h-full w-1/2 overflow-clip"
          >
            <div class="bg-secondary relative h-full overflow-hidden">
              <SettingsAppearanceMiniDashboard
                class="absolute top-1/6 left-1/5"
              />
            </div>
          </VcThemeProvider>

          <VcThemeProvider
            appearance="dark"
            class="absolute inset-0 h-full"
          >
            <div
              class="bg-secondary relative h-full overflow-hidden rounded-l-xl"
            >
              <SettingsAppearanceMiniDashboard
                class="absolute top-1/6 left-1/10"
              />
            </div>
          </VcThemeProvider>

          <label class="text-primary mt-md inline-block text-sm font-medium">
            System preferences
          </label>
        </SettingsAppearanceRadioGroupItem>
      </div>
    </VcRadioGroup>
  </SettingsSection>
</template>
