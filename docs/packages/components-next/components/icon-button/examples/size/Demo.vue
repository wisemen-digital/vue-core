<script setup lang="ts">
import type { VcIconButtonProps } from '@wisemen/vue-core-components'
import { VcIconButton } from '@wisemen/vue-core-components'

const sizes: VcIconButtonProps['size'][] = [
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
]
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <VcIconButton
      v-for="size of sizes"
      :key="size"
      :size="size"
      label="Button"
      icon="search"
      class="justify-self-start"
    />
  </div>
</template>
