<script setup lang="ts">
import { SelectScrollUpButton } from 'radix-vue'

import AppIcon from '../icon/AppIcon.vue'
</script>

<template>
  <SelectScrollUpButton
    class="absolute top-0 z-10 flex w-full justify-center bg-gradient-to-t from-transparent to-white p-2"
  >
    <AppIcon
      class="text-muted-foreground"
      icon="chevronUp"
      size="default"
    />
  </SelectScrollUpButton>
</template>
