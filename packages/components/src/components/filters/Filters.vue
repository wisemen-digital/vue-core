<script setup lang="ts" generic="TValue extends SelectValue">
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

import IconButton from '@/components/button/icon-button/IconButton.vue'
import Collapsable3 from '@/components/collapsable/Collapsable3.vue'
import Icon from '@/components/icon/Icon.vue'
import Popover from '@/components/popover/Popover.vue'
import { selectStyle } from '@/components/select/select.style'
import type { Icon as IconType } from '@/icons/icons'
import type { SelectValue } from '@/types/select.type'

interface Filter<TValue extends SelectValue> {
  icon?: IconType
  label: string
  options: {
    icon?: IconType
    value: TValue
  }[]
  type: 'multiselect'
}

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

type DisplayItem = DisplayItemFilter | DisplayItemValue

const filters: Filter<string>[] = [
  {
    icon: 'alertCircle',
    label: 'Status',
    options: [
      {
        icon: 'alertCircle',
        value: 'Active',
      },
      {
        icon: 'alertCircle',
        value: 'Inactive',
      },
      {
        icon: 'alertCircle',
        value: 'On hold',
      },
    ],
    type: 'multiselect',
  },
  {
    icon: 'eye',
    label: 'Visibility',
    options: [
      {
        icon: 'eye',
        value: 'Public',
      },
      {
        icon: 'eyeOff',
        value: 'Private',
      },
    ],
    type: 'multiselect',
  },
  {
    label: 'Priority',
    options: [
      // 'High',
      // 'Medium',
      // 'Low',
      // 'None',
      {
        value: 'High',
      },
      {
        value: 'Medium',
      },
      {
        value: 'Low',
      },
      {
        value: 'None',
      },
    ],
    type: 'multiselect',
  },
  {
    label: 'Label',
    options: [
      {
        value: 'Bug',
      },
      {
        value: 'Feature',
      },
      {
        value: 'Improvement',
      },
      {
        value: 'Reopened',
      },
    ],
    type: 'multiselect',
  },
]

const isOpen = ref<boolean>(false)
const search = ref<string>('')
const selectedFilterLabel = ref<null | string>(null)

const style = selectStyle()

const optionClasses = computed<string>(() => style.option())
const dropdownContentClasses = computed<string>(() => style.dropdownContent())
const listboxContentClasses = computed<string>(() => style.listboxContent())

const displayItems = computed<DisplayItem[]>(() => {
  if (selectedFilterLabel.value !== null) {
    // Show all options for the selected filter
    const selectedFilter = filters.find((filter) => filter.label === selectedFilterLabel.value)

    if (selectedFilter === undefined) {
      return []
    }

    return selectedFilter.options.map((option) => ({
      filterName: selectedFilter.label,
      icon: option.icon,
      label: option.value,
      type: 'value',
      onSelect: onSelectValue,
    })).filter((item) => item.label.toLowerCase().includes(search.value.toLowerCase())) as DisplayItem[]
  }

  if (search.value.trim().length === 0) {
    return filters.map((filter) => ({
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

  for (const filter of filters) {
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

    for (const option of filter.options) {
      if (option.value.toLowerCase().includes(search.value.toLowerCase())) {
        displayItems.push({
          filterName: filter.label,
          icon: option.icon,
          label: option.value,
          type: 'value',
          onSelect: (): void => {
            onSelectValue()
          },
        })
      }
    }
  }

  return displayItems
})

function onSelectFilter(filter: Filter<any>): void {
  selectedFilterLabel.value = filter.label
  search.value = ''
}

function onSelectValue(): void {
  isOpen.value = false
}

watch(isOpen, (isOpen) => {
  if (isOpen) {
    search.value = ''
    selectedFilterLabel.value = null
  }
})
</script>

<template>
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
              v-if="selectedFilterLabel !== null"
              icon="chevronLeft"
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
                  v-if="item.type === 'value' && selectedFilterLabel === null"
                  class="flex items-center gap-x-1"
                >
                  <div class="flex items-center gap-x-2">
                    <Icon
                      v-if="item.icon !== undefined"
                      :icon="item.icon"
                    />

                    <span class="text-quaternary">
                      {{ item.filterName }}
                    </span>
                  </div>

                  <Icon icon="chevronRight" />

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
                    />

                    <span>
                      {{ item.label }}
                    </span>
                  </div>

                  <Icon
                    icon="chevronRight"
                    class="text-quaternary"
                  />
                </div>

                <template v-else>
                  <div class="flex items-center gap-x-2">
                    <Icon
                      v-if="item.icon !== undefined"
                      :icon="item.icon"
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
</template>
