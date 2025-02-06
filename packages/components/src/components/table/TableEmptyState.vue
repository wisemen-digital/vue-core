<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Icon from '@/components/icon/Icon.vue'
import SkeletonItem from '@/components/skeleton/SkeletonItem.vue'
import { injectTableContext } from '@/components/table/table.context'
import TableCell from '@/components/table/TableCell.vue'
import TableHeader from '@/components/table/TableHeader.vue'

const props = defineProps<{
  hasActiveFilters: boolean
}>()

const tableContext = injectTableContext()

const { t } = useI18n()
</script>

<template>
  <div
    v-if="props.hasActiveFilters"
    :style="{
      gridTemplateColumns: tableContext.gridColsStyle.value,
    }"
    class="relative grid min-h-60 h-full overflow-hidden"
  >
    <TableHeader />

    <div class="absolute left-1/2 top-1/2 mx-auto mt-4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-4xl text-center">
      <Icon
        icon="tableNoData"
        class="text-primary size-8"
      />

      <h3 class="py-md font-semibold text-primary">
        {{ t('component.table.no_results.title') }}
      </h3>

      <p class="mx-auto max-w-md text-sm text-tertiary">
        {{ t('component.table.no_results.description') }}
      </p>

      <slot name="empty-state-no-results-actions" />
    </div>
  </div>

  <div
    v-else
    :style="{
      gridTemplateColumns: tableContext.gridColsStyle.value,
    }"
    class="relative grid overflow-hidden"
  >
    <div class="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
      <Icon
        icon="tableNoData"
        class="text-primary size-8"
      />

      <h3 class="py-md font-semibold text-primary">
        {{ t('component.table.no_data.title') }}
      </h3>

      <p class="mx-auto max-w-xs text-sm text-tertiary">
        {{ t('component.table.no_data.description') }}
      </p>

      <slot name="empty-state-no-data-actions" />
    </div>

    <TableHeader />

    <div
      v-for="i in 40"
      :key="i"
      class="col-span-full grid grid-cols-subgrid odd:bg-secondary"
    >
      <div
        v-for="column of tableContext.columns.value"
        :key="column.key"
      >
        <TableCell>
          <SkeletonItem class="h-3 w-full rounded-full" />
        </TableCell>
      </div>
    </div>
  </div>
</template>
