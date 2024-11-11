<script setup lang="ts">
import { PopoverAnchor } from 'reka-ui'
</script>

<template>
  <PopoverAnchor :as-child="true">
    <slot />
  </PopoverAnchor>
</template>
