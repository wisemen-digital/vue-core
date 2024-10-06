<script setup lang="ts">
import { useId } from 'reka-ui'
import { computed, ref } from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import {
  type AppTextFieldProps,
  appTextFieldPropsDefaultValues,
} from '@/components/input-field/text-field/textField.props.js'
import { textFieldStyle } from '@/components/input-field/text-field/textField.style.js'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<AppTextFieldProps>(), appTextFieldPropsDefaultValues)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

defineSlots<{
  'error': () => null
  'hint': () => null
  'icon-left': () => null
  'icon-right': () => null
  'label': (props: { inputId: string }) => void
  'left': (props: { hasError: boolean, isDisabled: boolean, isFocused: boolean, isHovered: boolean }) => void
  'loader': () => null
  'right': (props: { hasError: boolean, isDisabled: boolean, isFocused: boolean, isHovered: boolean }) => void
}>()

const model = defineModel<null | string>({
  required: true,
})

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = textFieldStyle()

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const boxClasses = computed<string>(() => style.box({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputClasses = computed<string>(() => style.input({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconLeftClasses = computed<string>(() => style.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => style.iconRight({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputLabelClasses = computed<string>(() => style.inputLabel({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => style.loaderBox())

const loaderClasses = computed<string>(() => style.loader({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconStyleConfig = computed<StyleConfig<'icon'>>(() => {
  const defaultStyleConfig = {
    '--icon-color': 'var(--text-field-icon-color-default)',
    '--icon-size': 'var(--text-field-icon-size-default)',
  }

  if (props.isDisabled) {
    return {
      ...defaultStyleConfig,
      '--icon-color': 'var(--text-field-icon-color-disabled)',
    }
  }

  if (hasError.value) {
    return {
      ...defaultStyleConfig,
      '--icon-color': 'var(--text-field-icon-color-error)',
    }
  }

  if (isFocused.value) {
    return {
      ...defaultStyleConfig,
      '--icon-color': 'var(--text-field-icon-color-focus)',
    }
  }

  if (isHovered.value) {
    return {
      ...defaultStyleConfig,
      '--icon-color': 'var(--text-field-icon-color-hover)',
    }
  }

  return defaultStyleConfig
})

const errorClasses = computed<string>(() => style.error())

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}
</script>

<template>
  <div :style="props.styleConfig">
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <AppInputFieldLabel
        :for="inputId"
        :label="props.label"
        :is-required="props.isRequired"
        :class="inputLabelClasses"
      />
    </slot>

    <div
      :class="boxClasses"
      :aria-disabled="props.isDisabled"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <slot
        v-if="props.iconLeft !== null"
        name="icon-left"
      >
        <AppIcon
          :icon="props.iconLeft"
          :class="iconLeftClasses"
          :style-config="iconStyleConfig"
        />
      </slot>

      <slot
        :is-focused="isFocused"
        :is-hovered="isHovered"
        :is-disabled="props.isDisabled"
        :has-error="hasError"
        name="left"
      />

      <input
        :id="inputId"
        v-model="model"
        :data-test-id="props.testId"
        :readonly="props.isReadonly"
        :disabled="props.isDisabled"
        :placeholder="props.placeholder ?? undefined"
        :spellcheck="props.isSpellCheckEnabled"
        :class="inputClasses"
        :autocomplete="props.autoComplete"
        :type="props.type"
        :required="props.isRequired"
        @focus="onFocus"
        @blur="onBlur"
      >

      <slot
        :is-focused="isFocused"
        :is-hovered="isHovered"
        :is-disabled="props.isDisabled"
        :has-error="hasError"
        name="right"
      />

      <div
        v-if="props.isLoading"
        :class="loaderBoxClasses"
      >
        <slot name="loader">
          <AppSpinner :class="loaderClasses" />
        </slot>
      </div>

      <slot
        v-else-if="props.iconRight !== null"
        name="icon-right"
      >
        <AppIcon
          :icon="props.iconRight"
          :class="iconRightClasses"
          :style-config="iconStyleConfig"
        />
      </slot>
    </div>

    <AppCollapsable>
      <div v-if="hasError">
        <slot
          name="error"
        >
          <AppInputFieldError
            :errors="props.errors"
            :class="errorClasses"
          />
        </slot>
      </div>

      <div v-else-if="props.hint !== null">
        <slot name="hint">
          <AppInputFieldHint
            :hint="props.hint"
            :class="hintClasses"
          />
        </slot>
      </div>
    </AppCollapsable>
  </div>
</template>
