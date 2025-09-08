<script setup lang="ts">
import Subgrid from '@/components/table/parts/Subgrid.vue'
import TableRow from '@/components/table/parts/TableRow.vue'
import { useInjectTableContext } from '@/components/table/table.context'

const {
  data,
} = useInjectTableContext()
</script>

<template>
  <Subgrid role="rowgroup">
    <TableRow
      v-for="(rowData, rowIndex) of data?.data ?? []"
      :key="rowIndex"
      :data="rowData"
    />
  </Subgrid>
</template>
