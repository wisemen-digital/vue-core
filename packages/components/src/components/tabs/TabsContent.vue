<script setup lang="ts">
import { TabsContent } from 'reka-ui'

const props = defineProps<{
  /**
   * A unique value that associates the content with a trigger.
   */
  value: string
}>()

defineSlots<{
  /**
   * The content to display in the tab.
   */
  default: () => void
}>()
</script>

<template>
  <TabsContent
    :value="props.value"
    class="rounded-md outline-none ring-brand-primary-500 ring-offset-1 duration-200 focus-visible:ring"
  >
    <slot />
  </TabsContent>
</template>
