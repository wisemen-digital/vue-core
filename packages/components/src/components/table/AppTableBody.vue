<script setup lang="ts">
import AppTableRow from '@/components/table/AppTableRow.vue'
import { injectTableContext } from '@/components/table/table.context.js'

const tableContext = injectTableContext()
</script>

<template>
  <div
    role="rowgroup"
    class="col-span-full grid grid-cols-subgrid"
  >
    <AppTableRow
      v-for="(row, rowIndex) of tableContext.data.value!.data"
      :key="rowIndex"
      :row="row"
      :row-index="rowIndex"
    />
  </div>
</template>
