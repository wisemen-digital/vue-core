<script setup lang="ts">
import { AppTableCell } from '@wisemen/vue-core'

const props = defineProps<{
  age: number
}>()
</script>

<template>
  <AppTableCell>
    {{ props.age }} years old
  </AppTableCell>
</template>
