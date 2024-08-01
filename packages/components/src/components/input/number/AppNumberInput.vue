<script setup lang="ts">
import { computed } from 'vue'

import AppIconButton from '@/components/button/AppIconButton.vue'
import AppInput from '@/components/input/AppInput.vue'
import { useInputStyle } from '@/components/input/input.style'
import type { Icon } from '@/icons/icons'

const props = withDefaults(defineProps<{
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
  id: null,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  hideControls: false,
  iconLeft: null,
  max: null,
  min: 0,
  placeholder: null,
})

defineSlots<{
  /** Optional content on the left of the input (overrides the rendering of the left Icon) */
  left: () => void
  /** Optional content on the right of the input (to the right of the increment/decrement controls) */
  right: () => void
}>()

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

    const parsed = Number.parseFloat(value)

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

const inputStyle = useInputStyle()

const controlsClasses = computed<string>(() => inputStyle.numberControls())
const downButtonClasses = computed<string>(() => inputStyle.numberDownButton())
const upButtonClasses = computed<string>(() => inputStyle.numberUpButton())
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
      v-if="props.iconLeft === null"
      #left
    >
      <slot name="left" />
    </template>
    <template
      v-if="!props.hideControls"
      #right
    >
      <div :class="controlsClasses">
        <AppIconButton
          :is-disabled="props.isDisabled || hasReachedMax"
          :class="upButtonClasses"
          icon="chevronUp"
          variant="ghost"
          label="Minus"
          icon-size="sm"
          tabindex="-1"
          @click="increment"
        />

        <AppIconButton
          :is-disabled="props.isDisabled || hasReachedMin"
          :class="downButtonClasses"
          variant="ghost"
          icon="chevronDown"
          icon-size="sm"
          label="Plus"
          tabindex="-1"
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
