<script setup lang="ts">
import dayjs from 'dayjs'
import {
  DateRangePickerField,
  DateRangePickerTrigger,
} from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'

const props = defineProps<{
  endDate: Date | null
  startDate: Date | null
  isDisabled?: boolean
  isInvalid?: boolean
}>()

const { classAttr } = useComponentAttrs()

const formattedDate = computed<string>(() => {
  const start = props.startDate !== null ? dayjs(props.startDate).format('DD/MM/YYYY') : 'dd/mm/yyyy'
  const end = props.endDate !== null ? dayjs(props.endDate).format('DD/MM/YYYY') : 'dd/mm/yyyy'

  return `${start} - ${end}`
})
</script>

<template>
  <DateRangePickerField
    :class="[
      classAttr,
      {
        'border-input-border [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
        'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
        'cursor-not-allowed opacity-50': props.isDisabled,
      },
    ]"
    class="relative flex h-10 w-full items-center gap-2 rounded-input border border-solid bg-input px-3 text-sm text-input-foreground outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2"
  >
    <DateRangePickerTrigger
      as-child
    >
      <div class="flex  items-center gap-2">
        <p :class="{ 'text-muted-foreground': props.startDate === null && props.endDate === null }">
          {{ formattedDate }}
        </p>
        <AppIcon
          class="ml-auto text-muted-foreground"
          size="sm"
          icon="calendar"
        />
      </div>
    </DateRangePickerTrigger>
  </DateRangePickerField>
</template>
