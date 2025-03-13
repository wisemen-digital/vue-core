<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import TabsIndicator from '@/packages/@next/tabs/parts/TabsIndicator.vue'
import TabsList from '@/packages/@next/tabs/parts/TabsList.vue'
import TabsRoot from '@/packages/@next/tabs/parts/TabsRoot.vue'
import type { TabsProps } from '@/packages/@next/tabs/tabs.props'

const props = withDefaults(defineProps<TabsProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  classConfig: null,
  variant: 'underline',
})

defineSlots<{
  /**
   * Slot for the tabs content.
   */
  content: () => void
  /**
   * Slot for the tabs items.
   */
  items: () => void
}>()

const route = useRoute()
const activeRouteName = computed<string>(() => route.name as string)
</script>

<template>
  <TabsRoot
    v-bind="props"
    :model-value="activeRouteName"
  >
    <TabsList>
      <slot name="items" />

      <TabsIndicator />
    </TabsList>

    <slot name="content" />
  </TabsRoot>
</template>
