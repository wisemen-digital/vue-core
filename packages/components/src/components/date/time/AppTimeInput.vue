<script setup lang="ts">
import AppInput from '@/components/input/AppInput.vue'
import type { Icon } from '@/icons/icons.js'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: string | null
  /**
   * The test id of the input.
   * @default null
   */
  testId?: string | null
  /**
   * Disables the input.
   */
  isDisabled?: boolean
  /**
   * Set an invalid state to the input.
   */
  isInvalid?: boolean
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * Sets the input in readonly state.
   */
  isReadonly?: boolean
  /**
   * The left icon of the input.
   * @default 'clock'
   */
  iconLeft?: Icon | null
  /**
   * Placeholder of the input.
   * @default null
   */
  placeholder?: string | null
}>(), {
  id: null,
  testId: null,
  hasClearButton: false,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  iconLeft: 'clock',
  placeholder: null,
})

const modelValue = defineModel<string | null>({
  required: true,
})

function formatNumberToTime(time: number): string | null {
  const timeString = time.toString()

  if (time < 24) {
    return `${timeString.padStart(2, '0')}:00`
  }
  else if (time < 60) {
    return `00:${timeString.padStart(2, '0')}`
  }
  else if (time < 100) {
    return `01:${(time - 60).toString().padStart(2, '0')}`
  }
  else if (timeString.length === 3) {
    return `${timeString.slice(0, 1)}:${timeString.slice(1)}`
  }
  else if (timeString.length === 4) {
    return `${timeString.slice(0, 2)}:${timeString.slice(2)}`
  }

  return null
}

function formatHoursMinutesToTime(hours: number, minutes: number): string | null {
  if (hours < 24 && minutes < 60) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }

  return null
}

function onInputBlur(): void {
  if (modelValue.value === null) {
    return
  }

  const time = modelValue.value

  if (/^\d+$/.test(time) && time.length <= 4) {
    modelValue.value = formatNumberToTime(Number.parseInt(time))

    return
  }

  if (/^\d{1,2}h$/.test(time)) {
    const hours: number = Number.parseInt(time.replace('h', ''))

    modelValue.value = formatHoursMinutesToTime(hours, 0)

    return
  }

  if (/^\d{1,2}m$/.test(time)) {
    const minutes: number = Number.parseInt(time.replace('m', ''))

    modelValue.value = formatHoursMinutesToTime(0, minutes)

    return
  }

  if (/^\d{1,2}[hm]\d{1,2}m?$/.test(time)) {
    const timeParts = time.split(/[hm]/)
    const hours: number = Number.parseInt(timeParts[0] ?? '0')
    const minutes: number = Number.parseInt(timeParts[1] ?? '0')

    modelValue.value = formatHoursMinutesToTime(hours, minutes)

    return
  }

  if (/^\d{1,2}[:.\-, ]\d{1,2}$/.test(time)) {
    const timeParts = time.split(/[:.\-, ]/)
    const hours: number = Number.parseInt(timeParts[0] ?? '0')
    const minutes: number = Number.parseInt(timeParts[1] ?? '0')

    modelValue.value = formatHoursMinutesToTime(hours, minutes)

    return
  }

  modelValue.value = null
}
</script>

<template>
  <AppInput
    :id="props.id"
    v-model="modelValue"
    :test-id="props.testId"
    :is-invalid="props.isInvalid"
    :is-disabled="props.isDisabled"
    :is-loading="props.isLoading"
    :placeholder="props.placeholder"
    :icon-left="props.iconLeft"
    :is-readonly="props.isReadonly"
    @blur="onInputBlur"
  >
    <template #right>
      <slot name="right" />
    </template>
  </AppInput>
</template>
