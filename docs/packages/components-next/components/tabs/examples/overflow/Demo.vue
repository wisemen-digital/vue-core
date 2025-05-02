<script setup lang="ts">
import {
  VcTabs,
  VcTabsContent,
  VcTabsItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const selectedTab = ref<string>('profile')

const variants: VcTabsProps['variant'][] = [
  'underline',
  'button-brand',
  'button-border',
]
</script>

<template>
  <div class="gap-8xl flex w-84 flex-col">
    <VcTabs
      v-for="variant of variants"
      :key="variant"
      v-model="selectedTab"
      :variant="variant"
    >
      <template #items>
        <VcTabsItem value="profile">
          Profile
        </VcTabsItem>

        <VcTabsItem value="settings">
          Settings
        </VcTabsItem>

        <VcTabsItem
          :is-disabled="true"
          value="billing"
        >
          Billing
        </VcTabsItem>

        <VcTabsItem value="configurations">
          Configurations
        </VcTabsItem>

        <VcTabsItem value="notifications">
          Notifications
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

          <VcTabsContent value="configurations">
            <p class="text-secondary text-sm font-semibold">
              Configurations
            </p>
          </VcTabsContent>

          <VcTabsContent value="notifications">
            <p class="text-secondary text-sm font-semibold">
              Notifications
            </p>
          </VcTabsContent>
        </div>
      </template>
    </VcTabs>
  </div>
</template>
