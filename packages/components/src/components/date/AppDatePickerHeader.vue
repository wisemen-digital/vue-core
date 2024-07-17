<script setup lang="ts">
import {
  DatePickerHeader,
  DatePickerHeading,
  DatePickerNext,
  DatePickerPrev,
} from 'radix-vue'
import { computed } from 'vue'

import AppButton from '@/components/button/AppButton.vue'
import AppIconButton from '@/components/button/AppIconButton.vue'

const props = defineProps<{
  step: 'calendar' | 'month' | 'year'
}>()

const emit = defineEmits<{
  monthClick: []
  next: []
  previous: []
  yearClick: []
}>()

function getRangeLabel(currentDate: string): string {
  const year = Number(currentDate.split(' ')[1])

  const currentYear = year
  const startOfDecade = currentYear - (currentYear % 10)
  const endOfDecade = startOfDecade + 9

  return `${startOfDecade} - ${endOfDecade}`
}

function onPreviousClick(): void {
  emit('previous')
}

function onNextClick(): void {
  emit('next')
}

function onMonthButtonClick(): void {
  emit('monthClick')
}

function onYearButtonClick(): void {
  emit('yearClick')
}

const pickerStep = computed<'month' | 'year'>(() => {
  if (props.step === 'calendar') {
    return 'month'
  }

  return 'year'
})
</script>

<template>
  <DatePickerHeader class="flex items-center justify-between">
    <DatePickerPrev
      :step="pickerStep"
      as="div"
      as-child
    >
      <AppIconButton
        label="chevronLeft"
        variant="ghost"
        size="sm"
        icon="chevronLeft"
        @click.stop="onPreviousClick"
      />
    </DatePickerPrev>

    <DatePickerHeading class="font-medium text-foreground">
      <template #default="{ headingValue }">
        <div
          v-if="props.step === 'year'"
          class="flex items-center"
        >
          <AppButton
            size="sm"
            variant="ghost"
            @click="onYearButtonClick"
          >
            {{ getRangeLabel(headingValue) }}
          </AppButton>
        </div>
        <div
          v-if="props.step === 'month'"
          class="flex items-center"
        >
          <AppButton
            size="sm"
            variant="ghost"
            @click="onMonthButtonClick"
          >
            {{ headingValue.split(' ')[1] }}
          </AppButton>
        </div>
        <div
          v-if="props.step === 'calendar'"
          class="flex items-center"
        >
          <AppButton
            size="sm"
            variant="ghost"
            @click="onMonthButtonClick"
          >
            {{ headingValue.split(' ')[0] }}
          </AppButton>
          <AppButton
            size="sm"
            variant="ghost"
            @click="onYearButtonClick"
          >
            {{ headingValue.split(' ')[1] }}
          </AppButton>
        </div>
      </template>
    </DatePickerHeading>

    <DatePickerNext
      :step="pickerStep"
      as="div"
      as-child
    >
      <AppIconButton
        label="chevronRight"
        variant="ghost"
        size="sm"

        icon="chevronRight"
        @click.stop="onNextClick"
      />
    </DatePickerNext>
  </DatePickerHeader>
</template>
