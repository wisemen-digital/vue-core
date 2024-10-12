<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { computed } from 'vue'

import { dialogStyle } from '@/components/dialog/dialog.style.js'

const style = dialogStyle()
const overlayClasses = computed<string>(() => style.overlay())
</script>

<template>
  <DialogOverlay
    :force-mount="true"
    :class="overlayClasses"
  />
</template>
