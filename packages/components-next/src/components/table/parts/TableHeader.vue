<script setup lang="ts">
import { mergeClasses } from '@/class-variant/customClassVariants'
import Subgrid from '@/components/table/parts/Subgrid.vue'
import TableHeaderCell from '@/components/table/parts/TableHeaderCell.vue'
import TableHeaderCellProvider from '@/components/table/parts/TableHeaderCellProvider.vue'
import { useInjectTableContext } from '@/components/table/table.context'

const {
  classConfig,
  columns,
  customClassConfig,
  style,
} = useInjectTableContext()
</script>

<template>
  <Subgrid
    :class="style.header({
      class: mergeClasses(classConfig?.header, customClassConfig?.header),
    })"
    role="rowgroup"
  >
    <Subgrid role="row">
      <TableHeaderCellProvider
        v-for="column of columns"
        :key="column.key"
        :column="column"
      >
        <Component
          :is="column.header(column)"
          v-if="column.header !== undefined"
        />

        <TableHeaderCell v-else />
      </TableHeaderCellProvider>
    </Subgrid>
  </Subgrid>
</template>
