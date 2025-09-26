<script setup lang="ts">
import type { VcTabsProps } from '@wisemen/vue-core-components'
import {
  VcTabs,
  VcTabsContent,
  VcTabsItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const selectedTab = ref<string>('profile')
const orientations: VcTabsProps['orientation'][] = [
  'horizontal',
  'vertical',
]
</script>

<template>
  <div class="gap-8xl flex flex-col items-start">
    <VcTabs
      v-for="orientation of orientations"
      :key="orientation"
      v-model="selectedTab"
      :orientation="orientation"
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
            <p class="text-secondary text-sm font-semibold">
              Profile
            </p>
          </VcTabsContent>

          <VcTabsContent value="settings">
            <p class="text-secondary text-sm font-semibold">
              Settings
            </p>
          </VcTabsContent>

          <VcTabsContent value="billing">
            <p class="text-secondary text-sm font-semibold">
              Billing
            </p>
          </VcTabsContent>
        </div>
      </template>
    </VcTabs>
  </div>
</template>
