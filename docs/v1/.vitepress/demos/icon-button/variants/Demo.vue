<script setup lang="ts">
import { VcIconButton, VcIconButtonProps } from '@wisemen/vue-core'

const variants: VcIconButtonProps['variant'][] = [
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
    <VcIconButton 
      v-for="variant of variants" 
      :key="variant" 
      :variant="variant"
      icon="translate"
      label="Translate"
    />
  </div>
</template>