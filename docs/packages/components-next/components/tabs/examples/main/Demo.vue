<script setup lang="ts">
import {
  VcTabs,
  VcTabsContent,
  VcTabsItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const selectedTab = ref<string>('profile')
</script>

<template>
  <VcTabs v-model="selectedTab">
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
</template>
