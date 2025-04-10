<script setup lang="ts">
import type { VcBadgeProps } from '@wisemen/vue-core-components'
import { VcBadge } from '@wisemen/vue-core-components'

const colors: VcBadgeProps['color'][] = [
  'brand',
  'success',
  'warning',
  'error',
  'gray',
]
</script>

<template>
  <div class="gap-x-md flex">
    <VcBadge
      v-for="color of colors"
      :key="color"
      :color="color"
      variant="translucent"
    >
      Badge
    </VcBadge>
  </div>
</template>
