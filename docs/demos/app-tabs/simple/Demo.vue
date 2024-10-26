<script setup lang="ts">
import type { TabItem } from '@wisemen/vue-core'
import { AppTabs, AppTabsContent } from '@wisemen/vue-core'
import { ref } from 'vue'

const tabItems: TabItem[] = [
  {
    value: 'customization',
    label: 'Customization',
  },
  {
    value: 'components',
    label: 'Components',
  },
  {
    value: 'settings',
    label: 'Settings',
  },
]

const value = ref<TabItem>(tabItems[0]!)
</script>

<template>
  <AppTabs
    v-model="value"
    :items="tabItems"
  >
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
  </AppTabs>
</template>
