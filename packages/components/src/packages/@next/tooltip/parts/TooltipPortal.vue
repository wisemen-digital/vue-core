<script setup lang="ts">
import { TooltipPortal as RekaTooltipPortal } from 'reka-ui'

import { injectConfigContext } from '@/components/config-provider/config.context'

const configContext = injectConfigContext()
</script>

<template>
  <RekaTooltipPortal :to="configContext.teleportTargetSelector">
    <slot />
  </RekaTooltipPortal>
</template>
