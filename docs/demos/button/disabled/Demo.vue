<script setup lang="ts">
import { VcButton } from '@wisemen/vue-core'

const variants = [
  'default',
  'secondary',
  'secondary-color',
  'tertiary',
  'tertiary-color',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary',
] as const
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <VcButton
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
      :is-disabled="true"
    >
      Button
    </VcButton>
  </div>
</template>
