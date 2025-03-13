<script setup lang="ts">
import { DialogTitle } from 'reka-ui'

defineSlots<{
  /**
   * Use to indicate the title of the drawer.
   */
  default: () => void
}>()
</script>

<template>
  <DialogTitle :as-child="true">
    <slot />
  </DialogTitle>
</template>
