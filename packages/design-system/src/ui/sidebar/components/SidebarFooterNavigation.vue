<script setup lang="ts">
import { UIColumnLayout } from '@/ui/column-layout/index'
</script>

<template>
  <UIColumnLayout
    class="w-full"
    gap="xs"
  >
    <slot />
  </UIColumnLayout>
</template>
