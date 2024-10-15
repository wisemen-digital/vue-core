<script setup lang="ts">
import { AppTableCell } from '@wisemen/vue-core'

const props = defineProps<{
  firstName: string
  lastName: string
}>()
</script>

<template>
  <AppTableCell :is-primary-cell="true">
    {{ props.firstName }} {{ props.lastName }}
  </AppTableCell>
</template>
