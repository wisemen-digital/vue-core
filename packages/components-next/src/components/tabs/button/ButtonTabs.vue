<script setup lang="ts">
import TabsBase from '@/components/tabs/shared/parts/TabsBase.vue'
import TabsIndicator from '@/components/tabs/shared/parts/TabsIndicator.vue'
import TabsList from '@/components/tabs/shared/parts/TabsList.vue'
import TabsRoot from '@/components/tabs/shared/parts/TabsRoot.vue'
import type { TabsProps } from '@/components/tabs/shared/tabs.props'

const props = withDefaults(defineProps<TabsProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  classConfig: null,
  direction: 'horizontal',
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

const modelValue = defineModel<string>({ required: true })
</script>

<template>
  <TabsRoot
    v-bind="props"
    v-model="modelValue"
  >
    <TabsBase>
      <TabsList>
        <slot name="items" />

        <TabsIndicator />
      </TabsList>
    </TabsBase>

    <slot name="content" />
  </TabsRoot>
</template>
