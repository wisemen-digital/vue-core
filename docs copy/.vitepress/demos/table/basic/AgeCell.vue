<script setup lang="ts">
import { VcTableCell } from '@wisemen/vue-core'

const props = defineProps<{
  age: number
}>()
</script>

<template>
  <VcTableCell>
    {{ props.age }} years old
  </VcTableCell>
</template>
