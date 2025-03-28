<script setup lang="ts">
import { VcIconButton, VcIconButtonProps } from '@wisemen/vue-core'

const sizes: VcIconButtonProps['size'][] = [
  'sm',
  'default',
  'lg',
  'xl',
  '2xl'
]
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <VcIconButton 
      v-for="size of sizes" 
      :key="size" 
      :size="size"
      icon="translate"
      label="Translate"
    />
  </div>
</template>