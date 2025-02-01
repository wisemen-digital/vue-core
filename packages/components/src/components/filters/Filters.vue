<script setup lang="ts" generic="TValue extends SelectValue, TFilter extends Record<string, AcceptableValue>">
import type {
  AcceptableValue,
} from '@wisemen/vue-core'
import {
  ListboxContent,
  ListboxFilter,
  ListboxItem,
  ListboxRoot,
} from 'reka-ui'
import {
  computed,
  ref,
  watch,
} from 'vue'

import Button from '@/components/button/button/Button.vue'
import IconButton from '@/components/button/icon-button/IconButton.vue'
import Collapsable3 from '@/components/collapsable/Collapsable3.vue'
import Icon from '@/components/icon/Icon.vue'
import Popover from '@/components/popover/Popover.vue'
import { useSelectStyle } from '@/components/select/select.style'
import type { Icon as IconType } from '@/icons/icons'
import type {
  Pagination,
  SelectValue,
} from '@/types'
import type { Filter } from '@/types/filter.type'
import type { FilterChangeEvent } from '@/types/pagination.type.ts'

interface DisplayItemFilter {
  icon?: IconType
  label: string
  type: 'filter'
  onSelect: () => void
}

interface DisplayItemValue {
  filterName: string
  icon?: IconType
  label: string
  type: 'value'
  onSelect: () => void
}

const props = defineProps<{
  filters: Filter<TFilter>[]
  pagination: Pagination<TFilter>
}>()

type DisplayItem = DisplayItemFilter | DisplayItemValue

const isOpen = ref<boolean>(false)
const search = ref<string>('')
const selectedFilterKey = ref<keyof TFilter | null>(null)

const selectStyle = useSelectStyle()

const optionClasses = computed<string>(() => selectStyle.option())
const dropdownContentClasses = computed<string>(() => selectStyle.dropdownContent())
const listboxContentClasses = computed<string>(() => selectStyle.listboxContent())

const displayItems = computed<DisplayItem[]>(() => {
  if (selectedFilterKey.value !== null) {
    // Show all options for the selected filter
    const selectedFilter = props.filters.find((filter) => filter.key === selectedFilterKey.value)

    if (selectedFilter === undefined) {
      return []
    }

    if (selectedFilter.type !== 'select' && selectedFilter.type !== 'multiselect') {
      return []
    }

    return selectedFilter.items.filter((item) => item.type === 'option').map((option) => ({
      filterName: selectedFilter.label,
      icon: option.icon,
      label: option.value,
      type: 'value',
      onSelect: (): void => onSelectValue({
        [selectedFilter.key]: option.value,
      }),
    })).filter((item) => item.label.toLowerCase().includes(search.value.toLowerCase())) as DisplayItem[]
  }

  if (search.value.trim().length === 0) {
    return props.filters.map((filter) => ({
      icon: filter.icon,
      label: filter.label,
      type: 'filter',
      onSelect: (): void => {
        onSelectFilter(filter)
      },
    }))
  }

  const displayItems: DisplayItem[] = []

  // First loop over filters, if filter label matches search, add filter
  // Then loop over options, if option label matches search, add option

  for (const filter of props.filters) {
    if (filter.label.toLowerCase().includes(search.value.toLowerCase())) {
      displayItems.push({
        icon: filter.icon,
        label: filter.label,
        type: 'filter',
        onSelect: () => {
          onSelectFilter(filter)
        },
      })

      // Don't show the options if the filter is still visible
      continue
    }

    if (filter.type !== 'select' && filter.type !== 'multiselect') {
      continue
    }

    for (const option of filter.items) {
      if (option.type !== 'option') {
        return
      }

      if (option.value?.toLowerCase().includes(search.value.toLowerCase())) {
        displayItems.push({
          filterName: filter.label,
          icon: option?.icon,
          label: option.value,
          type: 'value',
          onSelect: (): void => {
            onSelectValue({
              [filter.key]: option.value,
            })
          },
        })
      }
    }
  }

  return displayItems
})

function onSelectFilter(filter: Filter<TFilter>): void {
  selectedFilterKey.value = filter.key
  search.value = ''
}

function onSelectValue(value: FilterChangeEvent<TFilter>): void {
  props.pagination.handleFilterChange(value)

  isOpen.value = false
}

function onFilterRemove(filterKey: string): void {
  props.pagination.handleFilterChange({
    [filterKey]: undefined,
  })
}

watch(isOpen, (isOpen) => {
  if (isOpen) {
    search.value = ''
    selectedFilterKey.value = null
  }
})
</script>

<template>
  <div class="flex items-center gap-xl">
    <Popover
      v-model:is-open="isOpen"
      :is-arrow-hidden="true"
      :style-config="{
        '--popover-max-width-default': '250px',
      }"
      popover-width="available-width"
    >
      <template #trigger>
        <IconButton
          label="Filter"
          icon="alertCircle"
          variant="secondary"
          size="sm"
        />
      </template>

      <template #content>
        <ListboxRoot
          :multiple="true"
          class="select-default"
        >
          <div class="flex flex-col border-b border-solid border-primary">
            <div
              v-if="false"
              class="flex items-center gap-x-1 border-b border-solid border-primary px-select-dropdown-padding-x-default py-2.5"
            >
              <Icon
                v-if="selectedFilterKey !== null"
                icon="chevronLeft"
                class="size-4"
              />

              <span class="text-sm font-medium text-secondary">
                Filters
              </span>
            </div>

            <div class="px-select-dropdown-padding-x-default">
              <ListboxFilter
                v-model="search"
                placeholder="Search"
                class="w-full bg-transparent px-select-option-padding-x-default py-2.5 text-sm outline-none"
              />
            </div>
          </div>

          <div :class="dropdownContentClasses">
            <Collapsable3 :duration-in-ms="150">
              <ListboxContent
                :key="displayItems.length"
                :class="listboxContentClasses"
              >
                <ListboxItem
                  v-for="item of displayItems"
                  :key="item.label"
                  :value="item.label"
                  :class="optionClasses"
                  @select="item.onSelect"
                >
                  <div
                    v-if="item.type === 'value' && selectedFilterKey === null"
                    class="flex items-center gap-x-1"
                  >
                    <div class="flex items-center gap-x-2">
                      <Icon
                        v-if="item.icon !== undefined"
                        :icon="item.icon"
                        class="size-4"
                      />

                      <span class="text-quaternary">
                        {{ item.filterName }}
                      </span>
                    </div>

                    <Icon
                      icon="chevronRight"
                      class="size-4"
                    />

                    <span>
                      {{ item.label }}
                    </span>
                  </div>

                  <div
                    v-else-if="item.type === 'filter'"
                    class="flex w-full items-center justify-between"
                  >
                    <div class="flex items-center gap-x-2">
                      <Icon
                        v-if="item.icon !== undefined"
                        :icon="item.icon"
                        class="size-4"
                      />

                      <span>
                        {{ item.label }}
                      </span>
                    </div>

                    <Icon
                      icon="chevronRight"
                      class="text-quaternary size-4"
                    />
                  </div>

                  <template v-else>
                    <div class="flex items-center gap-x-2">
                      <Icon
                        v-if="item.icon !== undefined"
                        :icon="item.icon"
                        class="size-4"
                      />

                      {{ item.label }}
                    </div>
                  </template>
                </ListboxItem>
              </ListboxContent>
            </Collapsable3>
          </div>
        </ListboxRoot>
      </template>
    </Popover>

    <Button
      v-for="(filterValue, filterKey) in props.pagination.paginationOptions.value.filters"
      @click="onFilterRemove(filterKey)"
    >
      {{ filterValue }}
    </Button>
  </div>
</template>
