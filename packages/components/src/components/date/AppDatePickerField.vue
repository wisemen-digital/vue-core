<script setup lang="ts">
import {
  DatePickerField,
  DatePickerInput,
  DatePickerTrigger,
} from 'radix-vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/AppIconButton.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'

const props = defineProps<{
  isDisabled?: boolean
  isInvalid?: boolean
  type: 'date' | 'month' | 'year'
}>()

const emit = defineEmits<{
  dateClick: []
}>()

const { locale } = useI18n()

const { classAttr } = useComponentAttrs()

function onTriggerClick(): void {
  if (props.isDisabled) {
    return
  }

  emit('dateClick')
}

function formatMonth(month: null | string | undefined): string {
  if (month === null || month === undefined || month === 'mm') {
    return 'mm'
  }

  return new Date(`2021-${month}-01`).toLocaleString(locale.value, {
    month: 'long',
  })
}
</script>

<template>
  <DatePickerField
    v-slot="{ segments }"
    :class="[
      classAttr,
      {
        'border-input-border [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
        'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
        'cursor-not-allowed opacity-50': props.isDisabled,
      },
    ]"
    class="relative flex h-10 w-full items-center rounded-input border border-solid bg-input pl-3 pr-1 text-sm text-input-foreground outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2"
  >
    <div class="flex items-center">
      <template
        v-for="item in segments"
        :key="item.part"
      >
        <div v-if="props.type === 'month'">
          <DatePickerInput
            v-if="item.part === 'month'"
            :part="item.part"
            class="rounded-md p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none data-[placeholder]:text-input-placeholder"
          >
            {{ formatMonth(item.value) }}
          </DatePickerInput>
        </div>
        <div v-else>
          <DatePickerInput
            v-if="item.part === 'literal'"
            :part="item.part"
          >
            {{ item.value }}
          </DatePickerInput>
          <DatePickerInput
            v-else
            :part="item.part"
            class="rounded-md p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none data-[placeholder]:text-input-placeholder"
          >
            {{ item.value }}
          </DatePickerInput>
        </div>
      </template>
    </div>

    <DatePickerTrigger
      as-child
      @click="onTriggerClick"
    >
      <AppIconButton
        :is-disabled="props.isDisabled"
        label="calendar"
        class="ml-auto"
        variant="ghost"
        size="sm"
        icon="calendar"
      />
    </DatePickerTrigger>
  </DatePickerField>
</template>
