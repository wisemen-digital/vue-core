<script setup lang="ts">
import type { VcButtonV2Props } from '@wisemen/vue-core'
import { VcButtonV2 } from '@wisemen/vue-core'

const variants: VcButtonV2Props['variant'][] = [
  'primary',
  'secondary-gray',
  'secondary-color',
  'tertiary-gray',
  'tertiary-color',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary',
]
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <VcButtonV2
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
    >
      Button
    </VcButtonV2>
  </div>
</template>
