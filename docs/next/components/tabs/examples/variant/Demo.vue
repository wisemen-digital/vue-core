<script setup lang="ts">
import { ref } from 'vue'

import {
  VcTabs,
  VcTabsItem,
  VcTabsContent,
  VcTabsProps,
} from '@wisemen/vue-core-components'

const selectedTab = ref<string>('profile')
const variants: VcTabsProps['variant'][] = [
  'underline',
  'button-brand',
  'button-border',
]
</script>

<template>
  <div class="flex flex-col gap-8xl">
    <VcTabs
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
      v-model="selectedTab"
    >
      <template #items>
        <VcTabsItem value="profile">
          Profile
        </VcTabsItem>

        <VcTabsItem value="settings">
          Settings
        </VcTabsItem>

        <VcTabsItem value="billing">
          Billing
        </VcTabsItem>
      </template>

      <template #content>
        <div class="mt-xl">
          <VcTabsContent value="profile">
            <p class="text-sm font-semibold text-secondary">Profile</p>
          </VcTabsContent>

          <VcTabsContent value="settings">
            <p class="text-sm font-semibold text-secondary">Settings</p>
          </VcTabsContent>

          <VcTabsContent value="billing">
            <p class="text-sm font-semibold text-secondary">Billing</p>
          </VcTabsContent>
        </div>
      </template>
    </VcTabs>
  </div>
</template>