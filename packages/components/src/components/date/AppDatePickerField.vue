<script setup lang="ts">
import dayjs from 'dayjs'
import {
  DatePickerField,
  DatePickerTrigger,
} from 'radix-vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/AppIconButton.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'

const props = defineProps<{
  isDisabled?: boolean
  isInvalid?: boolean
  maxValue?: Date | null
  minValue?: Date | null
  modelValue: Date | undefined
  type: 'date' | 'month' | 'year'
}>()

const emit = defineEmits<{
  'blur': []
  'dateClick': []
  'update:modelValue': [Date | null]
}>()

const { locale } = useI18n()

const { classAttr } = useComponentAttrs()

function onTriggerClick(): void {
  if (props.isDisabled) {
    return
  }

  emit('dateClick')
}

const dateValue = ref<string>('')

function onBlur(): void {
  if (!dayjs(dateValue.value).isValid()) {
    emit('update:modelValue', null)

    return
  }

  const date = dayjs(dateValue.value, undefined, locale.value)

  emit('blur')

  if (props.minValue !== undefined && date.isBefore(props.minValue)) {
    emit('update:modelValue', props.minValue)

    return
  }

  if (props.maxValue !== undefined && date.isAfter(props.maxValue)) {
    emit('update:modelValue', props.maxValue)

    return
  }

  emit('update:modelValue', date.toDate())
}

const formattedDate = computed<string>(() => {
  if (props.modelValue === undefined) {
    return dateValue.value
  }

  return dayjs(props.modelValue.toString()).format('DD/MM/YYYY')
})

const dateMask = '##/##/####'

const placeholder = 'dd/mm/yyyy'

const dateModel = computed<string>({
  get: () => formattedDate.value,
  set: (value: string) => {
    dateValue.value = value
  },
})
</script>

<template>
  <DatePickerField
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
    <input
      v-model="dateModel"
      :placeholder="placeholder"
      class="outline-none"
      type="text"
      @blur="onBlur"
    >

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
