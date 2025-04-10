<script setup lang="ts">
import type { VcBadgeProps } from '@wisemen/vue-core-components'
import { VcBadge } from '@wisemen/vue-core-components'

const variants: VcBadgeProps['variant'][] = [
  'outline',
  'translucent',
  'solid',
]
</script>

<template>
  <div class="gap-x-md flex">
    <VcBadge
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
      color="brand"
    >
      Badge
    </VcBadge>
  </div>
</template>
