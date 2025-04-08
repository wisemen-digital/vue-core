<script setup lang="ts">
import { RouterLink } from 'vue-router'

import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import Subgrid from '@/components/table/parts/Subgrid.vue'
import TableCellLayout from '@/components/table/parts/TableCellLayout.vue'
import { useInjectTableContext } from '@/components/table/table.context'
import { mergeClasses } from '@/customClassVariants'

const props = defineProps<{
  data: any
}>()

const {
  hasVerticalOverflow,
  classConfig,
  columns,
  customClassConfig,
  rowAction,
  style,
} = useInjectTableContext()
</script>

<template>
  <Subgrid
    :class="[
      style.row({
        class: mergeClasses(classConfig?.row, customClassConfig?.row),
      }),
      {
        'last:border-b-0': hasVerticalOverflow,
      },
    ]"
    role="row"
  >
    <RouterLink
      v-if="rowAction !== null && rowAction.type === 'link'"
      :to="rowAction.to(data)"
      class="absolute inset-0 cursor-pointer outline-none"
    >
      <span class="sr-only">
        {{ rowAction.label(data) }}
      </span>
    </RouterLink>

    <button
      v-if="rowAction !== null && rowAction.type === 'button'"
      class="absolute inset-0 cursor-pointer outline-none"
      @click="rowAction.onClick(data)"
    >
      <span class="sr-only">
        {{ rowAction.label(data) }}
      </span>
    </button>

    <TableCellLayout
      v-for="column of columns"
      :key="column.key"
      :column="column"
    >
      <TestIdProvider :test-id="column.testId ?? null">
        <Component :is="column.cell(props.data)" />
      </TestIdProvider>
    </TableCellLayout>
  </Subgrid>
</template>
