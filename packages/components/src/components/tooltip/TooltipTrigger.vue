<script setup lang="ts">
import { TooltipTrigger } from 'reka-ui'
</script>

<template>
  <TooltipTrigger :as-child="true">
    <slot />
  </TooltipTrigger>
</template>
