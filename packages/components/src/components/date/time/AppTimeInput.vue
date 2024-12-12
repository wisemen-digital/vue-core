<script setup lang="ts">
import AppInput from '@/components/input/AppInput.vue'
import type { Icon } from '@/icons/icons.js'
import { TimeUtil } from '@/utils/time.util'

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

function onInputBlur(): void {
  if (modelValue.value === null) {
    return
  }

  const time = modelValue.value

  if (/^\d+$/.test(time) && time.length <= 4) {
    modelValue.value = TimeUtil.formatNumberToTime(Number.parseInt(time))

    return
  }

  if (/^\d{1,2}h$/.test(time)) {
    const hours: number = Number.parseInt(time.replace('h', ''))

    modelValue.value = TimeUtil.formatHoursMinutesToTime(hours, 0)

    return
  }

  if (/^\d{1,2}m$/.test(time)) {
    const minutes: number = Number.parseInt(time.replace('m', ''))

    modelValue.value = TimeUtil.formatHoursMinutesToTime(0, minutes)

    return
  }

  if (/^\d{1,2}[hm]\d{1,2}m?$/.test(time)) {
    const timeParts = time.split(/[hm]/)
    const hours: number = Number.parseInt(timeParts[0] ?? '0')
    const minutes: number = Number.parseInt(timeParts[1] ?? '0')

    modelValue.value = TimeUtil.formatHoursMinutesToTime(hours, minutes)

    return
  }

  if (/^\d{1,2}[:.\-, ]\d{1,2}$/.test(time)) {
    const timeParts = time.split(/[:.\-, ]/)
    const hours: number = Number.parseInt(timeParts[0] ?? '0')
    const minutes: number = Number.parseInt(timeParts[1] ?? '0')

    modelValue.value = TimeUtil.formatHoursMinutesToTime(hours, minutes)

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
