<script setup lang="ts">
import { VcButton, VcButtonProps } from '@wisemen/vue-core'

const variants: VcButtonProps['variant'][] = [
  'default',
  'secondary',
  'secondary-color',
  'tertiary',
  'tertiary-color',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary',
]
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <VcButton 
      v-for="variant of variants" 
      :key="variant" 
      :variant="variant"
    >
      Button
    </VcButton>
  </div>
</template>