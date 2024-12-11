<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { computed } from 'vue'

import { useDrawerStyle } from '@/components/drawer/drawer.style'

const drawerStyle = useDrawerStyle()
const overlayClasses = computed<string>(() => drawerStyle.overlay())
</script>

<template>
  <DialogOverlay
    :force-mount="true"
    :class="overlayClasses"
  />
</template>
