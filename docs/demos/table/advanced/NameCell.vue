<script setup lang="ts">
import { VcTableCell } from '@wisemen/vue-core'

const props = defineProps<{
  firstName: string
  lastName: string
}>()
</script>

<template>
  <VcTableCell :is-primary-cell="true">
    {{ props.firstName }} {{ props.lastName }}
  </VcTableCell>
</template>
