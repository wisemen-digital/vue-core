<script setup lang="ts">
import { TooltipProvider, TooltipRoot } from 'radix-vue'

const props = defineProps<{
  delayDuration: number
  disableCloseOnTriggerClick: boolean
  disableHoverableContent: boolean
}>()
</script>

<template>
  <TooltipProvider
    :delay-duration="props.delayDuration"
    :disable-closing-trigger="props.disableCloseOnTriggerClick"
    :disable-hoverable-content="props.disableHoverableContent"
  >
    <TooltipRoot>
      <slot />
    </TooltipRoot>
  </TooltipProvider>
</template>
