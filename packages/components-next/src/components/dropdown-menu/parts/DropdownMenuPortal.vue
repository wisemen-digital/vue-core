<script setup lang="ts">
import { DropdownMenuPortal as RekaDropdownMenuPortal } from 'reka-ui'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'

const configContext = useInjectConfigContext()
</script>

<template>
  <RekaDropdownMenuPortal :to="configContext.teleportTargetSelector">
    <ThemeProvider>
      <slot />
    </ThemeProvider>
  </RekaDropdownMenuPortal>
</template>
