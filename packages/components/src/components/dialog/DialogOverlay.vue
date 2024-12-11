<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { computed } from 'vue'

import { useDialogStyle } from '@/components/dialog/dialog.style'

const dialogStyle = useDialogStyle()
const overlayClasses = computed<string>(() => dialogStyle.overlay())
</script>

<template>
  <DialogOverlay
    :force-mount="true"
    :class="overlayClasses"
  />
</template>
