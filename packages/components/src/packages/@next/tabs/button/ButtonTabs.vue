<script setup lang="ts">
import type { ButtonTabsValue } from '@/packages/@next/tabs/button/buttonTabs.props'
import TabsIndicator from '@/packages/@next/tabs/shared/parts/TabsIndicator.vue'
import TabsList from '@/packages/@next/tabs/shared/parts/TabsList.vue'
import TabsRoot from '@/packages/@next/tabs/shared/parts/TabsRoot.vue'
import type { TabsProps } from '@/packages/@next/tabs/shared/tabs.props'

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

const model = defineModel<ButtonTabsValue>({
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
