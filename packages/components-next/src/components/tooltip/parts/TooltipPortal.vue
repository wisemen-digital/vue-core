<script setup lang="ts">
import { injectConfigContext } from '@/components/config-provider/config.context'

const configContext = injectConfigContext()
</script>

<template>
  <Teleport
    :defer="true"
    :to="configContext.teleportTargetSelector"
  >
    <slot />
  </Teleport>
</template>
