<script setup lang="ts">
import { VcButton, VcButtonProps } from '@wisemen/vue-core-components'

const sizes: VcButtonProps['size'][] = [
  'sm',
  'md',
  'lg',
  'xl',
  '2xl'
]
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <VcButton 
      v-for="size of sizes" 
      :key="size" 
      :size="size"
      class="justify-self-start"
    >
      Button
    </VcButton>
  </div>
</template>