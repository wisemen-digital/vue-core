<script setup lang="ts">
import { PopoverClose } from 'reka-ui'
</script>

<template>
  <PopoverClose :as-child="true">
    <slot />
  </PopoverClose>
</template>
