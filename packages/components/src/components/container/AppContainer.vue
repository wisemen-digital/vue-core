<script setup lang="ts">
import { computed } from 'vue'

import { useContainerStyle } from '@/components/container/container.style'

defineSlots<{
  /** Content to add in the container */
  default: () => void
}>()

const containerStyle = useContainerStyle()
const containerBase = computed<string>(() => containerStyle.base())
</script>

<template>
  <div :class="containerBase">
    <slot />
  </div>
</template>
