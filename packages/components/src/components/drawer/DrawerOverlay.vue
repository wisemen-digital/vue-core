<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { computed } from 'vue'

import { drawerStyle } from '@/components/drawer/drawer.style'

const style = drawerStyle()
const overlayClasses = computed<string>(() => style.overlay())
</script>

<template>
  <DialogOverlay
    :force-mount="true"
    :class="overlayClasses"
  />
</template>
