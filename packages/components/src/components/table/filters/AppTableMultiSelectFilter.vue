<script setup lang="ts" generic="TFilters">
import { computed, ref } from 'vue'

import AppButton from '@/components/button/AppButton.vue'
import FormCheckbox from '@/components/checkbox/FormCheckbox.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { useTableStyle } from '@/components/table/table.style'
import AppText from '@/components/text/AppText.vue'
import type {
  Pagination,
  PaginationFilterWithMultipleOptions,
  TableFilterEvent,
} from '@/types/pagination.type'

const props = defineProps<{
  filter: PaginationFilterWithMultipleOptions<TFilters>
  pagination: Pagination<TFilters>
}>()

const emit = defineEmits<{
  change: [event: TableFilterEvent<TFilters>]
}>()

const isExpanded = ref<boolean>(false)

const filterModel = computed<string[]>(() => {
  const data = props.pagination.paginationOptions.value.filters?.[props.filter.id] ?? null

  if (data === null) {
    return []
  }

  if (Array.isArray(data)) {
    return data as string[]
  }

  return ([
    data,
  ] ?? []) as string[]
})

const numberOfSelectedItems = computed<number>(() => {
  return filterModel.value.length
})

function onUpdate(value: string): void {
  let newValue = [
    ...filterModel.value,
  ]

  if (isEnabled(value)) {
    newValue = newValue.filter((val) => val !== value)
  }
  else {
    newValue.push(value)
  }

  emit('change', { key: props.filter.id, value: newValue })
}

function isEnabled(value: string): boolean {
  return filterModel.value.includes(value)
}

function onToggleFilterButtonClick(): void {
  isExpanded.value = !isExpanded.value
}

const tableStyle = useTableStyle()

const filterMultiSelectButtonClasses = computed<string>(() => tableStyle.filterMultiSelectButton())
const filterMultiSelectTextClasses = computed<string>(() => tableStyle.filterMultiSelectText())
const filterMultiSelectContainerClasses = computed<string>(() => tableStyle.filterMultiSelectContainer())
const filterMultiSelectSelectedItemsClasses = computed<string>(() => tableStyle.filterMultiSelectSelectedItems())
const filterMultiSelectExpandedItemsClasses = computed<string>(() => tableStyle.filterMultiSelectExpandedItems())
const filterMultiSelectOptionClasses = computed<string>(() => tableStyle.filterMultiSelectOption())
</script>

<template>
  <div>
    <AppButton
      :class="filterMultiSelectButtonClasses"
      size="sm"
      variant="ghost"
      @click="onToggleFilterButtonClick"
    >
      <div :class="filterMultiSelectContainerClasses">
        <AppText
          :class="filterMultiSelectTextClasses"
          variant="subtext"
        >
          {{ props.filter.label }}
        </AppText>
        <div
          v-if="numberOfSelectedItems > 0"
          :class="filterMultiSelectSelectedItemsClasses"
        >
          {{ numberOfSelectedItems.toString() }}
        </div>
        <AppIcon
          :icon="isExpanded ? 'chevronUp' : 'chevronDown'"
          size="xs"
        />
      </div>
    </AppButton>
    <div
      v-if="isExpanded"
      :class="filterMultiSelectExpandedItemsClasses"
    >
      <div
        v-for="(option, index) in props.filter.options"
        :key="`${props.filter.id.toString()}-${index}`"
        :class="filterMultiSelectOptionClasses"
      >
        <FormCheckbox
          v-if="option.type === 'option'"
          :label="props.filter.displayFn(option.value)"
          :model-value="isEnabled(option.value)"
          @update:model-value="() => onUpdate(option.value)"
        />
      </div>
    </div>
  </div>
</template>
