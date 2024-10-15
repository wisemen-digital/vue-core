<script setup lang="ts">
import type { TableColumn } from '@wisemen/vue-core'
import {
  AppCheckbox,
  AppTableHeaderCell,
} from '@wisemen/vue-core'

const props = defineProps<{
  column: TableColumn<any>
}>()
</script>

<template>
  <AppTableHeaderCell :column="props.column">
    <template #left>
      <AppCheckbox :model-value="false" />
    </template>
  </AppTableHeaderCell>
</template>
