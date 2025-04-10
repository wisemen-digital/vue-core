<script setup lang="ts">
import type { VcBadgeProps } from '@wisemen/vue-core-components'
import { VcBadge } from '@wisemen/vue-core-components'

const variants: VcBadgeProps['variant'][] = [
  'brand',
  'success',
  'warning',
  'error',
]
</script>

<template>
  <div class="gap-x-md flex">
    <VcBadge
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
    >
      Badge
    </VcBadge>
  </div>
</template>
