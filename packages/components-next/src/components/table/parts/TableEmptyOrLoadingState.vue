<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { mergeClasses } from '@/class-variant/customClassVariants'
import Button from '@/components/button/default-button/Button.vue'
import Icon from '@/components/icon/Icon.vue'
import ProgressiveBlur from '@/components/internal/ProgressiveBlur.vue'
import Subgrid from '@/components/table/parts/Subgrid.vue'
import TableCellLayout from '@/components/table/parts/TableCellLayout.vue'
import TableHeader from '@/components/table/parts/TableHeader.vue'
import { useInjectTableContext } from '@/components/table/table.context'

const {
  isEmpty,
  isLoading,
  activeFilterCount,
  classConfig,
  columns,
  customClassConfig,
  gridTemplateColumns,
  style,
  onClearFiltersAndSearch,
} = useInjectTableContext()

const { t } = useI18n()

const ROW_COUNT = 10
</script>

<template>
  <div
    v-if="isEmpty || isLoading"
    :style="{ gridTemplateColumns }"
    class="bg-primary relative grid overflow-hidden"
  >
    <TableHeader />

    <div
      v-if="isEmpty"
      class="
        absolute top-1/2 left-1/2 z-12 -translate-x-1/2 -translate-y-1/2
        text-center
      "
    >
      <slot
        :active-filter-count="activeFilterCount"
        name="empty-state"
      >
        <Icon
          icon="search"
          class="text-secondary mx-auto size-6"
        />

        <p class="text-primary mt-xl text-lg font-semibold">
          <template v-if="activeFilterCount > 0">
            {{ t('component.table.no_results.title') }}
          </template>

          <template v-else>
            {{ t('component.table.no_data.title') }}
          </template>
        </p>

        <p class="text-secondary pb-xl pt-md mx-auto max-w-92 text-sm">
          <template v-if="activeFilterCount > 0">
            {{ t('component.table.no_results.description') }}
          </template>

          <template v-else>
            {{ t('component.table.no_data.description') }}
          </template>
        </p>

        <Button
          v-if="activeFilterCount > 0"
          variant="secondary"
          class="mx-auto"
          size="sm"
          @click="onClearFiltersAndSearch"
        >
          {{ t('component.table.clear_filter', { count: activeFilterCount }) }}
        </Button>
      </slot>
    </div>

    <Subgrid class="relative overflow-hidden mask-b-from-0% mask-b-to-75%">
      <ProgressiveBlur
        v-if="isEmpty"
        side="bottom"
        class="inset-0 z-5"
      />

      <template
        v-for="rowIndex of ROW_COUNT"
        :key="rowIndex"
      >
        <div
          v-for="column of columns"
          :key="column.key"
        >
          <TableCellLayout :column="column">
            <div
              :class="style.cellSkeleton({
                class: mergeClasses(classConfig?.cellSkeleton, customClassConfig?.cellSkeleton),
              })"
            >
              <div class="bg-tertiary h-4 rounded-md" />
            </div>
          </TableCellLayout>
        </div>
      </template>
    </Subgrid>
  </div>
</template>
