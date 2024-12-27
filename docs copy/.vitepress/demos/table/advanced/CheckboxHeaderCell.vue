<script setup lang="ts">
import {
  type TableColumn,
  VcCheckbox,
  VcTableHeaderCell,
} from '@wisemen/vue-core'

const props = defineProps<{
  column: TableColumn<any>
}>()
</script>

<template>
  <VcTableHeaderCell :column="props.column">
    <template #left>
      <VcCheckbox :model-value="false" />
    </template>
  </VcTableHeaderCell>
</template>
