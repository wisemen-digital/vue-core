<script setup lang="ts">
import type { VcBadgeProps } from '@wisemen/vue-core-components'
import { VcBadge } from '@wisemen/vue-core-components'

const sizes: VcBadgeProps['size'][] = [
  'sm',
  'md',
  'lg',
]
</script>

<template>
  <div class="gap-x-md flex items-center">
    <VcBadge
      v-for="size of sizes"
      :key="size"
      :size="size"
      color="brand"
      variant="translucent"
    >
      Badge
    </VcBadge>
  </div>
</template>
