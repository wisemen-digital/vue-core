<script setup lang="ts">
import Subgrid from '@/components/table/parts/Subgrid.vue'
import TableHeaderCell from '@/components/table/parts/TableHeaderCell.vue'
import { useInjectTableContext } from '@/components/table/table.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  columns,
  customClassConfig,
  style,
} = useInjectTableContext()
</script>

<template>
  <Subgrid role="rowgroup">
    <Subgrid
      :class="style.header({
        class: mergeClasses(classConfig?.header, customClassConfig?.header),
      })"
      role="row"
    >
      <template
        v-for="column of columns"
        :key="column.key"
      >
        <Component
          :is="column.header(column)"
          v-if="column.header !== undefined"
        />

        <TableHeaderCell
          v-else
          :column="column"
        />
      </template>
    </Subgrid>
  </Subgrid>
</template>
