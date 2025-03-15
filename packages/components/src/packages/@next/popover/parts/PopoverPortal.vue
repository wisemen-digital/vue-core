<script setup lang="ts">
import { PopoverPortal as RekaPopoverPortal } from 'reka-ui'

import { injectConfigContext } from '@/components/config-provider/config.context'

const configContext = injectConfigContext()
</script>

<template>
  <RekaPopoverPortal :to="configContext.teleportTargetSelector">
    <slot />
  </RekaPopoverPortal>
</template>
