<script setup lang="ts">
import { computed } from 'vue'

import type { Icon } from '../../icons/icons'
import AppIconButton from '../button/AppIconButton.vue'
import AppInput from './AppInput.vue'

const props = withDefaults(defineProps<{
  /**
   * Whether to hide the increment and decrement controls.
   * @default false
   */
  hideControls?: boolean
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is invalid.
   * @default false
   */
  isInvalid?: boolean
  /**
   * Whether the input is loading.
   */
  isLoading?: boolean
  /**
   * The maximum value of the input.
   * @default null
   */
  max?: null | number
  /**
   * The minimum value of the input.
   * @default 0
   */
  min?: null | number
  /**
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
}>(), {
  hideControls: false,
  iconLeft: undefined,
  id: null,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  max: null,
  min: 0,
  placeholder: null,
})

const model = defineModel<null | number>({
  required: true,
})

const computedModel = computed<null | string>({
  get() {
    if (model.value === null) {
      return null
    }

    return model.value.toString()
  },
  set(value) {
    if (value === null) {
      model.value = null
      return
    }

    const parsed = Number.parseInt(value, 10)

    if (Number.isNaN(parsed)) {
      model.value = null
      return
    }

    model.value = parsed
  },
})

const hasReachedMax = computed<boolean>(() => {
  return props.max !== null && model.value !== null && model.value >= props.max
})

const hasReachedMin = computed<boolean>(() => {
  return props.min !== null && model.value !== null && model.value <= props.min
})

function decrement(): void {
  if (model.value === null) {
    model.value = props.min
    return
  }

  if (hasReachedMin.value) {
    return
  }

  model.value -= 1
}

function increment(): void {
  if (model.value === null) {
    model.value = props.min
    return
  }

  if (hasReachedMax.value) {
    return
  }

  model.value += 1
}
</script>

<template>
  <AppInput
    :id="props.id"
    v-model="computedModel"
    :min="props.min"
    :max="props.max"
    :is-disabled="props.isDisabled"
    :is-invalid="props.isInvalid"
    :is-loading="props.isLoading"
    :placeholder="props.placeholder"
    :icon-left="props.iconLeft"
    type="number"
  >
    <template
      v-if="!props.hideControls"
      #right
    >
      <div class="mr-0.5 flex flex-col items-center justify-center">
        <AppIconButton
          :is-disabled="props.isDisabled || hasReachedMax"
          icon="chevronUp"
          variant="ghost"
          label="Minus"
          icon-size="sm"
          class="h-4 w-7 rounded-b-none"
          tabindex="-1"
          @click="increment"
        />

        <AppIconButton
          :is-disabled="props.isDisabled || hasReachedMin"
          variant="ghost"
          icon="chevronDown"
          icon-size="sm"
          label="Plus"
          tabindex="-1"
          class="h-4 w-7 rounded-t-none"
          @click="decrement"
        />
      </div>

      <slot name="right" />
    </template>
  </AppInput>
</template>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number] {
  -moz-appearance:textfield;
  appearance:textfield;
}
</style>
