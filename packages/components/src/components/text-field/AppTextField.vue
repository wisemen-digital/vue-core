<script setup lang="ts">
import { useId } from 'radix-vue'
import { computed, ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import {
  type AppTextFieldProps,
  appTextFieldPropsDefaultValues,
} from '@/components/text-field/textField.props.js'
import { textFieldStyle } from '@/components/text-field/textField.style.js'

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

const iconLeftClasses = computed<string>(() => style.iconleft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => style.iconright({
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
  <div>
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <label
        :for="inputId"
        :class="inputLabelClasses"
      >
        {{ props.label }} <template v-if="props.isRequired">*</template>
      </label>
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
        :data-test-id="props.testId"
        :readonly="props.isReadonly"
        :disabled="props.isDisabled"
        :placeholder="props.placeholder ?? undefined"
        :spellcheck="props.isSpellCheckEnabled"
        :data-error="hasError"
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
        />
      </slot>
    </div>

    <slot
      v-if="hasError"
      name="error"
    >
      <span :class="errorClasses">
        {{ props.errors?._errors[0] }}
      </span>
    </slot>

    <slot
      v-else-if="props.hint !== null"
      name="hint"
    >
      <span :class="hintClasses">
        {{ props.hint }}
      </span>
    </slot>
  </div>
</template>

<style lang="scss">
:root {
  --text-field-border-left-default: #d0d5dd;
  --text-field-border-left-focus: #007bff;
  --text-field-border-left-hover: #007bff;
  --text-field-border-left-disabled: #eee;
  --text-field-border-left-error: #ff0202;

  --text-field-border-right-default: #d0d5dd;
  --text-field-border-right-focus: #007bff;
  --text-field-border-right-hover: #007bff;
  --text-field-border-right-disabled: #eee;
  --text-field-border-right-error: #ff0202;

  --text-field-border-bottom-default: #d0d5dd;
  --text-field-border-bottom-focus: #007bff;
  --text-field-border-bottom-hover: #007bff;
  --text-field-border-bottom-disabled: #eee;
  --text-field-border-bottom-error: #ff0202;

  --text-field-border-top-default: #d0d5dd;
  --text-field-border-top-focus: #007bff;
  --text-field-border-top-hover: #007bff;
  --text-field-border-top-disabled: #eee;
  --text-field-border-top-error: #ff0202;

  --text-field-focus-ring-default: transparent;
  --text-field-focus-ring-focus: #007bff70;
  --text-field-focus-ring-hover: #007bff70;
  --text-field-focus-ring-disabled: #007bff70; // kan niet
  --text-field-focus-ring-error: #ff020270;

  --text-field-bg-default: #ffffff;
  --text-field-bg-focus: #ffffff;
  --text-field-bg-hover: #ffffff;
  --text-field-bg-disabled: #fbfbfb;
  --text-field-bg-error: #ffffff;

  --text-field-color-default: #303030;
  --text-field-color-focus: #303030;
  --text-field-color-hover: #303030;
  --text-field-color-disabled: #e9e9e9;
  --text-field-color-error: #303030;

  --text-field-placeholder-default: #c6c6c6;
  --text-field-placeholder-focus: #c6c6c6;
  --text-field-placeholder-hover: #c6c6c6;
  --text-field-placeholder-disabled: #dedede;
  --text-field-placeholder-error: #c6c6c6;

  --text-field-shadow-default: 0px 0px 0px 0px #000000;
  --text-field-shadow-focus: 0px 0px 0px 0px #000000;
  --text-field-shadow-hover: 0px 0px 0px 0px #000000;
  --text-field-shadow-disabled: 0px 0px 0px 0px #000000;
  --text-field-shadow-error: 0px 0px 0px 0px #000000;

  --text-field-border-radius-top-left-default: 6px;
  --text-field-border-radius-top-right-default: 6px;
  --text-field-border-radius-bottom-left-default: 6px;
  --text-field-border-radius-bottom-right-default: 6px;

  --text-field-padding-left-default: 12px;
  --text-field-padding-right-default: 12px;

  --text-field-height-default: 40px;

  --text-field-font-size-default: 14px;
  --text-field-font-weight-default: 400;

  // Icon
  --text-field-icon-size-default: 18px;

  --text-field-icon-color-default: #909090;
  --text-field-icon-color-focus: #007bff;
  --text-field-icon-color-hover: #909090;
  --text-field-icon-color-disabled: #ccc;
  --text-field-icon-color-error: #ff0202;

  --text-field-icon-left-padding-left-default: 12px;
  --text-field-icon-right-padding-right-default: 12px;

  // Label
  --text-field-label-color-default: #3d4658;
  --text-field-label-color-focus: #3d4658;
  --text-field-label-color-hover: #3d4658;
  --text-field-label-color-disabled: #3d4658;
  --text-field-label-color-error: #ff0202;

  --text-field-label-font-size-default: 14px;
  --text-field-label-font-weight-default: 400;
  --text-field-label-padding-bottom-default:4px;

  // Hint
  --text-field-hint-color-default: #3d4658;
  --text-field-hint-color-focus: #3d4658;
  --text-field-hint-color-hover: #3d4658;
  --text-field-hint-color-disabled: #3d4658;
  --text-field-hint-color-error: #ff0202;

  --text-field-hint-font-size-default: 12px;
  --text-field-hint-font-weight-default: 400;
  --text-field-hint-padding-top-default: 6px;

  // Error
  --text-field-error-color-default: #ff0202;

  --text-field-error-font-size-default: 12px;
  --text-field-error-font-weight-default: 400;
  --text-field-error-padding-top-default: 6px;

  // Loader
  --text-field-loader-size-default: 14px;
  --text-field-loader-color-default: #3d4658;
  --text-field-loader-color-disabled: #b6b6b6;
  --text-field-loader-color-error: #ff0202;
  --text-field-loader-color-focus: #007bff;
  --text-field-loader-color-hover: #3d4658;
}
</style>
