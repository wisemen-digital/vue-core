<script setup lang="ts">
import { VcButton, VcButtonProps } from '@wisemen/vue-core-components'

const variants: VcButtonProps['variant'][] = [
  'primary', 
  'secondary',
  'tertiary',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary'
]
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