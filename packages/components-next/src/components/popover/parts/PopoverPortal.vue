<script setup lang="ts">
import { PopoverPortal } from 'reka-ui'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'

const configContext = useInjectConfigContext()
</script>

<template>
  <PopoverPortal :to="configContext.teleportTargetSelector">
    <ThemeProvider>
      <slot />
    </ThemeProvider>
  </PopoverPortal>
</template>
