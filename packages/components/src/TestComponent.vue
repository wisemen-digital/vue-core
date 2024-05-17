<script setup lang="ts">
import type { Icons } from '@/index'

const props = withDefaults(defineProps<{
  iconLeft?: keyof Icons['icons']
  test?: Icons
  version: '1'
}>(), {})

console.log('yes')
</script>

<template>
  <div>
    <slot />
  </div>
</template>
