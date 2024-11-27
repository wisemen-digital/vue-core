<script setup lang="ts">
import { injectTableContext } from '@/components/table/table.context'
import TableRow from '@/components/table/TableRow.vue'

const tableContext = injectTableContext()
</script>

<template>
  <div class="col-span-full grid grid-cols-subgrid">
    <TableRow
      v-for="(row, rowIndex) of tableContext.data.value!.data"
      :key="rowIndex"
      :row="row"
      :row-index="rowIndex"
    />
  </div>
</template>
