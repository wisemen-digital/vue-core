<script setup lang="ts">
import { PopoverAnchor as RekaPopoverAnchor } from 'reka-ui'
</script>

<template>
  <RekaPopoverAnchor :as-child="true">
    <slot />
  </RekaPopoverAnchor>
</template>
