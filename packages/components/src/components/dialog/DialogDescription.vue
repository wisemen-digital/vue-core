<script setup lang="ts">
import { DialogDescription } from 'reka-ui'

defineSlots<{
  /**
   * Use to indicate the description of the dialog.
   */
  default: () => void
}>()
</script>

<template>
  <DialogDescription :as-child="true">
    <slot />
  </DialogDescription>
</template>
