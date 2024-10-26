<script setup lang="ts">
import type { Icon, TabItem } from '@wisemen/vue-core'
import {
  AppIcon,
  AppTabs,
  AppTabsContent,
  AppTag,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const tabItems: TabItem<{ hasAlert: boolean, icon: Icon }>[] = [
  {
    value: 'customization',
    label: 'Customization',
    meta: {
      icon: 'switchVertical',
      hasAlert: false,
    },
  },
  {
    value: 'components',
    label: 'Components',
    meta: {
      icon: 'stars02',
      hasAlert: true,
    },
  },
  {
    value: 'settings',
    label: 'Settings',
    meta: {
      icon: 'settings01',
      hasAlert: false,
    },
  },
]

const value = ref<TabItem>(tabItems[0]!)
</script>

<template>
  <AppTabs
    v-model="value"
    :items="tabItems"
  >
    <template #item-left="{ item }">
      <AppTag
        v-if="item.meta.hasAlert"
        :style-config="{
          '--tag-font-size-default': '12px',
          '--tag-padding-x-default': '6px',
          '--tag-padding-y-default': '1px',
        }"
        class="mr-2"
      >
        <span class="uppercase">
          New
        </span>
      </AppTag>
    </template>

    <template #item-right="{ item }">
      <AppIcon
        :icon="item.meta.icon"
        class="ml-2"
      />
    </template>

    <template #default>
      <div class="mt-4">
        <AppTabsContent value="customization">
          <div>
            <span class="font-medium text-tertiary">
              Customization
            </span>
          </div>
        </AppTabsContent>

        <AppTabsContent value="components">
          <div>
            <span class="font-medium text-tertiary">
              Components
            </span>
          </div>
        </AppTabsContent>

        <AppTabsContent value="settings">
          <div>
            <span class="font-medium text-tertiary">
              Settings
            </span>
          </div>
        </AppTabsContent>
      </div>
    </template>
  </AppTabs>
</template>
