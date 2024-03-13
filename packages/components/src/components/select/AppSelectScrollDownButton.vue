<script setup lang="ts">
import { SelectScrollDownButton } from 'radix-vue'

import AppIcon from '../icon/AppIcon.vue'
</script>

<template>
  <SelectScrollDownButton
    class="absolute bottom-0 z-10 flex w-full justify-center bg-gradient-to-b from-transparent to-white p-2"
  >
    <AppIcon
      class="text-muted-foreground"
      icon="chevronDown"
      size="default"
    />
  </SelectScrollDownButton>
</template>
