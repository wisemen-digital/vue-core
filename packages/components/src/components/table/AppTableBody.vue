<script setup lang="ts" generic="TSchema">
import type { Component } from 'vue'
import {
  computed,
  h,
} from 'vue'
import { useI18n } from 'vue-i18n'
import type { RouteLocationNamedRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import type { TableColumn } from '../../types/table.type'
import AppButton from '../button/AppButton.vue'
import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'
import AppTableSkeletonLoader from './AppTableSkeletonLoader.vue'
import AppTableTextCell from './AppTableTextCell.vue'

const props = defineProps<{
  activeFilterCount: number
  columns: TableColumn<TSchema>[]
  data: TSchema[]
  gridTemplateColumns: string
  hasReachedHorizontalScrollEnd: boolean
  isHorizontallyScrollable: boolean
  isLoading: boolean
  isScrolledToRight: boolean
  isVerticallyScrollable: boolean
  pinFirstColumn: boolean
  pinLastColumn: boolean
  rowClick: ((row: TSchema) => void) | null
  rowTo: ((row: TSchema) => RouteLocationNamedRaw) | null
}>()

const emit = defineEmits<{
  clearFilters: []
}>()

const { t } = useI18n()

const rowComponent = computed<Component | string | typeof RouterLink>(() => {
  if (props.rowClick !== null) {
    return h('button', {
      type: 'button',
    })
  }

  if (props.rowTo !== null) {
    return RouterLink
  }

  return 'div'
})

function onRowClick(row: TSchema): void {
  if (props.rowClick !== null) {
    props.rowClick (row)
  }
}

function onClearFilters(): void {
  emit('clearFilters')
}

const areRowsClickable = computed<boolean>(() => props.rowClick !== null || props.rowTo !== null)
</script>

<template>
  <div class="flex size-full flex-1 flex-col">
    <AppTableSkeletonLoader v-if="props.isLoading" />

    <slot
      v-else-if="props.data.length === 0"
      name="empty-state"
    >
      <div class="sticky left-0">
        <AppTableSkeletonLoader
          :without-header="true"
          :number-of-rows="6"
          class="opacity-50"
        />

        <div class="absolute left-1/2 top-1/2 z-10 w-[90%] max-w-table-empty-state -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background/25 p-8 shadow-card-shadow backdrop-blur-sm">
          <AppIcon
            icon="search"
            size="xl"
            class="mx-auto text-muted-foreground"
          />

          <AppText
            variant="body"
            class="mt-4 text-center font-medium text-muted-foreground"
          >
            {{ t('components.table.no_results_found') }}
          </AppText>

          <div class="mt-2">
            <template v-if="activeFilterCount > 0">
              <AppText
                variant="subtext"
                class="text-center text-muted-foreground"
              >
                {{ t('components.table.no_query_match') }}
              </AppText>

              <AppButton
                variant="secondary"
                icon-right="close"
                size="sm"
                class="mx-auto mt-4"
                @click="onClearFilters"
              >
                {{ t('components.table.clear_filter_filters', { count: activeFilterCount }) }}
              </AppButton>
            </template>

            <AppText
              v-else
              variant="subtext"
              class="text-center text-muted-foreground"
            >
              {{ t('components.table.no_data') }}
            </AppText>
          </div>
        </div>
      </div>
    </slot>

    <div
      v-else
      class="flex w-full flex-col"
    >
      <Component
        :is="rowComponent"
        v-for="(row, index) in props.data"
        :key="index"
        :as="rowComponent"
        :to="props.rowTo ? props.rowTo(row) : undefined"
        :class="[
          props.isHorizontallyScrollable ? 'w-fit' : 'w-full',
          {
            'last:border-b-0': isVerticallyScrollable,
          },
        ]"
        :style="{
          gridTemplateColumns: props.gridTemplateColumns,
        }"
        class="group grid items-center rounded-none border-b border-solid border-border outline-none hover:bg-muted-background focus:bg-muted-background"
        @click="onRowClick(row)"
      >
        <div
          v-for="column in props.columns"
          :key="column.id"
          :class="[
            props.isScrolledToRight ? 'first:border-r-border' : 'first:border-r-transparent',
            props.hasReachedHorizontalScrollEnd ? 'last:border-l-transparent' : 'last:border-l-border',
            {
              'left-0 bg-background first:sticky first:z-10 first:border-r first:border-solid': props.pinFirstColumn,
            },
            {
              'right-0 bg-background last:sticky last:z-10 last:border-l last:border-solid':
                props.pinLastColumn && props.isHorizontallyScrollable,
            },
            {
              'group-focus-visible:bg-muted-background': areRowsClickable,
            },
          ]"
          class="flex h-full items-center px-6 py-4 group-hover:bg-muted-background"
        >
          <Component
            :is="column.render(row)"
            v-if="column.render !== undefined"
          />

          <AppTableTextCell v-else>
            {{ column.value(row) }}
          </AppTableTextCell>
        </div>
      </Component>
    </div>
  </div>
</template>
