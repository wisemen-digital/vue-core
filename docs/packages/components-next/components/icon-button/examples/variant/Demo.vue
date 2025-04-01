<script setup lang="ts">
import type { VcIconButtonProps } from '@wisemen/vue-core-components'
import { VcIconButton } from '@wisemen/vue-core-components'

const variants: VcIconButtonProps['variant'][] = [
  'primary',
  'secondary',
  'tertiary',
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
      label="Button"
      icon="search"
    />
  </div>
</template>
