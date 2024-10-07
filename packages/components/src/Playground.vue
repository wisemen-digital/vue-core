<script setup lang="ts">
import '@/styles/index.scss'
import '@/components/icon/iconStyle.config'
import '@/components/button/button/buttonStyle.config'
import '@/components/input-field-hint/inputFieldHintStyle.config'
import '@/components/input-field-error/inputFieldErrorStyle.config'
import '@/components/input-field-label/inputFieldLabelStyle.config'
import '@/components/popover/popoverStyle.config'
import '@/components/button/icon-button/iconButtonStyle.config'
import '@/components/select/selectStyle.config'
import '@/components/input-field/text-field/textFieldStyle.config'
import '@/components/tooltip/tooltipStyle.config'
import '@/components/tabs/tabsStyle.config'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import type { TabItem } from '@/types/tabs.type.js'

const tabItems: TabItem[] = [
  {
    id: 'Tab 1',
    label: 'Tab 1',
  },
  {
    id: 'Tab 2',
    label: 'Tab 2',
  },
  {
    id: 'Tab 3',
    isDisabled: true,
    label: 'Tab 3',
  },
  {
    id: 'Tab 4',
    label: 'Tab 4',
  },
]
</script>

<template>
  <div class="flex gap-x-24 p-24">
    <AppTabs :items="tabItems">
      <template #item-right>
        <AppIcon
          icon="check"
          class="ml-2 group-disabled:opacity-50"
        />
      </template>
    </AppTabs>

    <AppTabs
      :items="tabItems"
      class="tabs-2"
    >
      <template #item-right="{ item }">
        <AppIcon
          icon="check"
          class="ml-2 group-disabled:opacity-50"
        />
      </template>
    </AppTabs>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
