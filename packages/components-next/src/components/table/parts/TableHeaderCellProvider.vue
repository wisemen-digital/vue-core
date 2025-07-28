<script setup lang="ts">
import { computed } from 'vue'

import type { TableColumn } from '@/components/table/table.type'
import { useProvideTableHeaderCellContext } from '@/components/table/tableHeaderCell.context'

const props = defineProps<{
  column: TableColumn<any>
}>()

useProvideTableHeaderCellContext({
  column: computed<TableColumn<any>>(() => props.column),
})
</script>

<template>
  <slot />
</template>
