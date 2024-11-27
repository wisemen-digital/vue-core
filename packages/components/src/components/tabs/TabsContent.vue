<script setup lang="ts">
import { TabsContent } from 'reka-ui'

const props = defineProps<{
  value: string
}>()
</script>

<template>
  <TabsContent
    :value="props.value"
    class="rounded-md outline-none ring-brand-primary-500 ring-offset-1 duration-200 focus-visible:ring-2"
  >
    <slot />
  </TabsContent>
</template>
