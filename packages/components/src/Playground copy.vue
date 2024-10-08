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
import '@/components/dropdown-menu/dropdownMenuStyle.config'

import { ref } from 'vue'

import AppButton from '@/components/button/button/AppButton.vue'
import AppDropdownMenu from '@/components/dropdown-menu/AppDropdownMenu.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppTextField from '@/components/input-field/text-field/AppTextField.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppPopoverCloseButton from '@/components/popover/AppPopoverCloseButton.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import type { TabItem } from '@/types/tabs.type.js'

const tabItems: TabItem[] = [
  {
    id: 'Tab 1',
    label: 'Language',
  },
  {
    id: 'Tab 2',
    label: 'Tools',
  },
  {
    id: 'Tab 3',
    isDisabled: true,
    label: 'Settings',
  },
]

const tab = ref<TabItem>(tabItems[0]!)

// hoe pakken we het aan als je de styling van één item wil aanpassen
// in bv. dropdown of select?
</script>

<template>
  <div class="flex gap-x-24 p-24">
    <AppPopover>
      <template #trigger>
        <AppButton>
          Button
        </AppButton>
      </template>

      <template #content>
        <div class="h-40 w-80">
          <AppPopoverCloseButton />
          <AppTextField :model-value="null" />
        </div>
      </template>
    </AppPopover>

    <AppDropdownMenu>
      <template #top>
        <span class="block p-1 pb-0 text-sm font-medium text-white">
          Wouter Laermans
        </span>

        <span class="block px-1 pb-0.5 text-sm text-white/50">
          wouter.laermans@appwi.se
        </span>

        <div class="my-[6px] h-px bg-[#344054]" />
      </template>

      <template #bottom>
        <div class="my-[6px] h-px bg-[#344054]" />

        <span class="block p-1 pb-0 text-sm font-medium text-white">
          More content here
        </span>

        <span class="block px-1 pb-0.5 text-sm text-white/50">
          And some more content
        </span>
      </template>
    </AppDropdownMenu>

    <AppTabs
      v-model="tab"
      :items="tabItems"
    >
      <template #item-right="{ item }">
        <AppIcon
          :icon="item.id === 'Tab 1' ? 'translate01' : 'tool02'"
          class="ml-2 group-disabled:opacity-50"
        />
      </template>
    </AppTabs>

    <AppTabs
      v-model="tab"
      :items="tabItems"
      class="tabs-2"
    >
      <template #item-right="{ item }">
        <AppIcon
          :icon="item.id === 'Tab 1' ? 'translate01' : 'tool02'"
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
