<script setup lang="ts" generic="TSchema, TPagination extends BasePagination">
import TableBody from '@/components/table/parts/TableBody.vue'
import TableContent from '@/components/table/parts/TableContent.vue'
import TableEmptyOrLoadingState from '@/components/table/parts/TableEmptyOrLoadingState.vue'
import TableHeader from '@/components/table/parts/TableHeader.vue'
import TableHiddenResultsHint from '@/components/table/parts/TableHiddenResultsHint.vue'
import TableRoot from '@/components/table/parts/TableRoot.vue'
import TableScrollContainer from '@/components/table/parts/TableScrollContainer.vue'
import type { TableEmits } from '@/components/table/table.emits'
import type { TableProps } from '@/components/table/table.props'
import type { BasePagination } from '@/composables/pagination/pagination.type'

const props = defineProps<TableProps<TSchema, TPagination>>()

const emit = defineEmits<TableEmits>()
</script>

<template>
  <TableRoot
    v-bind="props"
    @next-page="emit('nextPage')"
  >
    <slot name="top" />

    <TableScrollContainer>
      <TableContent>
        <TableHeader />
        <TableBody />
      </TableContent>

      <TableHiddenResultsHint />
    </TableScrollContainer>

    <TableEmptyOrLoadingState>
      <template #empty-state="{ activeFilterCount }">
        <slot
          :active-filter-count="activeFilterCount"
          name="empty-state"
        />
      </template>
    </TableEmptyOrLoadingState>

    <slot name="bottom" />
  </TableRoot>
</template>
