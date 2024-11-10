<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppSkeletonItem from '@/components/skeleton/AppSkeletonItem.vue'
import AppTableCell from '@/components/table/AppTableCell.vue'
import AppTableHeader from '@/components/table/AppTableHeader.vue'
import { injectTableContext } from '@/components/table/table.context'

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
    class="relative grid min-h-60 overflow-hidden"
  >
    <AppTableHeader />

    <div class="absolute left-1/2 top-1/2 mx-auto mt-4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-4xl text-center">
      <AppIcon
        icon="tableNoData"
        class="text-primary"
        size="lg"
      />

      <h3 class="py-md font-semibold text-primary">
        {{ t('component.table.no_results.title') }}
      </h3>

      <p class="mx-auto max-w-md text-sm text-tertiary">
        {{ t('component.table.no_results.description') }}
      </p>
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
      <AppIcon
        icon="tableNoData"
        class="text-primary"
        size="lg"
      />

      <h3 class="py-md font-semibold text-primary">
        {{ t('component.table.no_data.title') }}
      </h3>

      <p class="mx-auto max-w-xs text-sm text-tertiary">
        {{ t('component.table.no_data.description') }}
      </p>
    </div>

    <AppTableHeader />

    <div
      v-for="i in 40"
      :key="i"
      class="col-span-full grid grid-cols-subgrid odd:bg-secondary"
    >
      <div
        v-for="column of tableContext.columns.value"
        :key="column.key"
      >
        <AppTableCell>
          <AppSkeletonItem class="h-3 w-full rounded-full" />
        </AppTableCell>
      </div>
    </div>
  </div>
</template>
