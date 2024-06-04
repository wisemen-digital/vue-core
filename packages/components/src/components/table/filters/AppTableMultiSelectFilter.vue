<script setup lang="ts" generic="TFilters">
import { computed, ref } from 'vue'

import AppButton from '@/components/button/AppButton.vue'
import FormCheckbox from '@/components/checkbox/FormCheckbox.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
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
  const data = props.pagination.paginationOptions.value.filters?.find((filter) => filter.key === props.filter.id)

  if (data?.value === undefined || data?.value === null) {
    return []
  }

  return Array.isArray(data?.value)
    ? data.value ?? []
    : [
        data?.value as string,
      ] ?? []
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
</script>

<template>
  <div>
    <AppButton
      class="block w-full py-0"
      size="sm"
      variant="ghost"
      @click="onToggleFilterButtonClick"
    >
      <div class="flex w-full items-center justify-between gap-2">
        <AppText
          class="mr-auto"
          variant="subtext"
        >
          {{ props.filter.label }}
        </AppText>
        <div
          v-if="numberOfSelectedItems > 0"
          class="flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white"
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
      class="max-h-40 overflow-y-auto px-2"
    >
      <div
        v-for="(option, index) in props.filter.options"
        :key="`${props.filter.id.toString()}-${index}`"
        class="my-2"
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
