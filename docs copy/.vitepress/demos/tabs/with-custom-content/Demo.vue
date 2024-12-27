<script setup lang="ts">
import type { Icon, TabItem } from '@wisemen/vue-core'
import {
  VcIcon,
  VcTabs,
  VcTabsContent,
  VcTag,
} from '@wisemen/vue-core'

import { ref } from 'vue'

interface CustomTabItem extends TabItem<{ hasAlert: boolean, icon: Icon }> {}

const tabItems: CustomTabItem[] = [
  {
    value: 'customization',
    label: 'Customization',
    icon: 'switchVertical',
    hasAlert: false,
  },
  {
    value: 'components',
    label: 'Components',
    icon: 'filter',
    hasAlert: true,
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: 'settings',
    hasAlert: false,
  },
]

const value = ref<CustomTabItem>(tabItems[0]!)
</script>

<template>
  <VcTabs
    v-model="value"
    :items="tabItems"
  >
    <template #item-left="{ item }">
      <VcTag
        v-if="item.hasAlert"
        :style-config="{
          '--tag-font-size-default': '10px',
          '--tag-padding-x-default': '6px',
        }"
        class="mr-2"
      >
        <span class="uppercase">
          New
        </span>
      </VcTag>
    </template>

    <template #item-right="{ item }">
      <VcIcon
        :icon="item.icon"
        class="ml-2 size-4"
      />
    </template>

    <template #default>
      <div class="mt-4">
        <VcTabsContent value="customization">
          <div>
            <span class="font-medium text-tertiary">
              Customization
            </span>
          </div>
        </VcTabsContent>

        <VcTabsContent value="components">
          <div>
            <span class="font-medium text-tertiary">
              Components
            </span>
          </div>
        </VcTabsContent>

        <VcTabsContent value="settings">
          <div>
            <span class="font-medium text-tertiary">
              Settings
            </span>
          </div>
        </VcTabsContent>
      </div>
    </template>
  </VcTabs>
</template>
