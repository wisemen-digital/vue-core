<script setup lang="ts">
import { DropdownMenuTrigger } from 'reka-ui'
</script>

<template>
  <DropdownMenuTrigger :as-child="true">
    <slot />
  </DropdownMenuTrigger>
</template>
