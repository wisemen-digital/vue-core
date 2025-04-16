<script setup lang="ts">
import { useInjectConfigContext } from '@/components/config-provider/config.context'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'

const configContext = useInjectConfigContext()
</script>

<template>
  <Teleport
    :defer="true"
    :to="configContext.teleportTargetSelector"
  >
    <ThemeProvider>
      <slot />
    </ThemeProvider>
  </Teleport>
</template>
