<script setup lang="ts">
import { useId } from 'radix-vue'
import { computed, ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import { textFieldStyle } from '@/components/text-field/textField.style.js'
import type { Icon } from '@/icons/icons.js'
import type { FormFieldErrors } from '@/types/formFieldErrors.type.js'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * Whether the input is readonly.
   * @default false
   */
  isReadonly?: boolean
  /**
   * Whether the input is spell check enabled.
   * @default false
   */
  isSpellCheckEnabled?: boolean
  /**
   * Whether the input is touched. Used to determine if an error should be shown.
   * @default false
   */
  isTouched?: boolean
  /**
   * The autocorrect property of the input.
   * @default 'off'
   */
  autoComplete?: 'off' | 'on'
  /**
   * The errors associated with the input.
   */
  errors?: FormFieldErrors | null
  /**
   * The hint text of the input.
   * @default null
   */
  hint?: null | string
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the input.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * The label of the input.
   * @default null
   */
  label?: null | string
  /**
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: null | string
  /**
   * The type of the input.
   * @default 'text'
   */
  type?: 'date' | 'datetime-local' | 'email' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
}>(), {
  id: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isSpellCheckEnabled: false,
  autoComplete: 'off',
  autoCorrect: 'off',
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  type: 'text',
})

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
        {{ props.label }}
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
