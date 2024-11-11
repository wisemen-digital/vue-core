<script setup lang="ts">
import { TabsContent } from 'reka-ui'

const props = defineProps<{
  value: string
}>()
</script>

<template>
  <TabsContent
    :as-child="true"
    :value="props.value"
  >
    <slot />
  </TabsContent>
</template>
