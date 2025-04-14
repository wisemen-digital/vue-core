<script setup lang="ts">
import { mergeClasses } from '@/class-variant/customClassVariants'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import Subgrid from '@/components/table/parts/Subgrid.vue'
import TableCellLayout from '@/components/table/parts/TableCellLayout.vue'
import TableRowAction from '@/components/table/parts/TableRowAction.vue'
import { useInjectTableContext } from '@/components/table/table.context'

const props = defineProps<{
  data: any
}>()

const {
  isFirstColumnSticky,
  classConfig,
  columns,
  customClassConfig,
  style,
} = useInjectTableContext()
</script>

<template>
  <Subgrid
    :class="[
      style.row({
        class: mergeClasses(classConfig?.row, customClassConfig?.row),
      }),
    ]"
    class="last:border-b-0"
    role="row"
  >
    <TableRowAction
      :is-focusable="true"
      :data="props.data"
    />

    <TableCellLayout
      v-for="(column, columnIndex) of columns"
      :key="column.key"
      :column="column"
    >
      <TestIdProvider :test-id="column.testId ?? null">
        <Component :is="column.cell(props.data)" />
      </TestIdProvider>

      <!--
        Sticky columns need a z-index (e.g., 1) to appear above regular cells.
        Interactive rows then require a higher z-index (e.g., 2) to sit above sticky columns.
        However, any interactive elements inside those rows need an even higher z-index (>2),
        which causes them to render on top of the sticky column as well.
        This creates a visual overflow issue, and due to stacking context limitations,
        there's no clean solution—so we use this workaround.

        The fix is to render the action again in the sticky column but make it non-interactive for screen readers.
      -->
      <TableRowAction
        v-if="columnIndex === 0 && isFirstColumnSticky"
        :is-focusable="false"
        :data="props.data"
      />
    </TableCellLayout>
  </Subgrid>
</template>
