<script setup lang="ts">
import { TooltipTrigger as RekaTooltipTrigger } from 'reka-ui'
</script>

<template>
  <RekaTooltipTrigger :as-child="true">
    <slot />
  </RekaTooltipTrigger>
</template>
