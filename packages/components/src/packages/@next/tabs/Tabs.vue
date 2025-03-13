<script setup lang="ts">
import TabsIndicator from '@/packages/@next/tabs/parts/TabsIndicator.vue'
import TabsList from '@/packages/@next/tabs/parts/TabsList.vue'
import TabsRoot from '@/packages/@next/tabs/parts/TabsRoot.vue'
import type { TabsProps } from '@/packages/@next/tabs/tabs.props'
import type { TabsValue } from '@/packages/@next/tabs/tabs.type'

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

const model = defineModel<TabsValue>({
  required: true,
})
</script>

<template>
  <TabsRoot
    v-bind="props"
    v-model="model"
  >
    <TabsList>
      <slot name="items" />

      <TabsIndicator />
    </TabsList>

    <slot name="content" />
  </TabsRoot>
</template>
