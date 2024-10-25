<script setup lang="ts">
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  useId,
} from 'reka-ui'
import {
  computed,
  ref,
} from 'vue'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { AppNumberFieldProps } from '@/components/input-field/number-field/numberField.props'
import { textFieldStyle } from '@/components/input-field/text-field/textField.style'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useElementAttributeObserver } from '@/composables/element-attribute-observer/elementAttributeObserver.composable'

const props = withDefaults(defineProps<AppNumberFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  areControlsHidden: false,
  autoComplete: 'off',
  errors: null,
  formatOptions: null,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  max: null,
  min: null,
  placeholder: null,
  step: 1,
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

defineSlots<{
  'bottom': () => void
  'error': () => null
  'hint': () => null
  'icon-left': () => null
  'icon-right': () => null
  'label': (props: { inputId: string }) => void
  'left': () => void
  'loader': () => null
  'right': () => null
}>()

const model = defineModel<null | number>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()
const globalConfigContext = injectConfigContext()

const decrementButtonRef = ref<InstanceType<typeof AppIconButton> | null>(null)
const incrementButtonRef = ref<InstanceType<typeof AppIconButton> | null>(null)

const isDecrementButtonDisabled = ref<boolean>(false)
const isIncrementButtonDisabled = ref<boolean>(false)

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = textFieldStyle()

if (!props.areControlsHidden) {
  useElementAttributeObserver({
    attribute: 'disabled',
    element: computed<HTMLElement | null>(() => decrementButtonRef.value?.$el ?? null),
    onChange: (value) => {
      isDecrementButtonDisabled.value = value !== null
    },
  })

  useElementAttributeObserver({
    attribute: 'disabled',
    element: computed<HTMLElement | null>(() => incrementButtonRef.value?.$el ?? null),
    onChange: (value) => {
      isIncrementButtonDisabled.value = value !== null
    },
  })
}

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
  hasIconLeft: props.iconLeft !== null,
  hasIconRight: props.iconRight !== null,
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
  <div
    :style="props.styleConfig"
    :class="themeProviderContext.theme.value"
    class="text-field-variant-default input-field-label-variant-default input-field-error-variant-default input-field-hint-variant-default icon-variant-default"
  >
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

    <NumberFieldRoot
      v-model="model"
      :default-value="model"
      :locale="globalConfigContext.locale.value"
      :as-child="true"
      :disabled="props.isDisabled"
      :min="props.min ?? undefined"
      :max="props.max ?? undefined"
      :step="props.step"
      :format-options="props.formatOptions ?? undefined"
    >
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

        <slot name="left" />

        <NumberFieldDecrement
          v-if="!props.areControlsHidden"
          :as-child="true"
        >
          <AppIconButton
            ref="decrementButtonRef"
            :style-config="{
              '--icon-button-size-default': '32px',
              '--icon-button-icon-size-default': '16px',
              '--button-ring-color-focus': 'transparent',
              '--button-bg-color-focus': 'var(--bg-secondary-hover)',
              '--button-bg-color-disabled': 'transparent',
              '--button-border-color-disabled': 'transparent',
            }"
            :is-disabled="props.isDisabled || isDecrementButtonDisabled"
            class="ml-[3px]"
            label="Decrement"
            icon="minus"
            size="sm"
            variant="tertiary"
          />
        </NumberFieldDecrement>

        <NumberFieldInput :as-child="true">
          <input
            :id="inputId"
            :data-test-id="props.testId"
            :readonly="props.isReadonly"
            :disabled="props.isDisabled"
            :placeholder="props.placeholder ?? undefined"
            :spellcheck="props.isSpellCheckEnabled"
            :class="[
              inputClasses, {
                'text-center': !props.areControlsHidden,
              },
            ]"
            :autocomplete="props.autoComplete"
            :aria-describedby="`${inputId}-error ${inputId}-hint`"
            :required="props.isRequired"
            :aria-invalid="props.errors !== undefined && props.errors !== null"
            @focus="onFocus"
            @blur="onBlur"
          >
        </NumberFieldInput>

        <NumberFieldIncrement
          v-if="!props.areControlsHidden"
          :as-child="true"
        >
          <AppIconButton
            ref="incrementButtonRef"
            :style-config="{
              '--icon-button-size-default': '32px',
              '--icon-button-icon-size-default': '16px',
              '--button-ring-color-focus': 'transparent',
              '--button-bg-color-focus': 'var(--bg-secondary-hover)',
              '--button-bg-color-disabled': 'transparent',
              '--button-border-color-disabled': 'transparent',
            }"
            :is-disabled="props.isDisabled || isIncrementButtonDisabled"
            label="Increment"
            icon="plus"
            size="sm"
            variant="tertiary"
            class="mr-[3px]"
          />
        </NumberFieldIncrement>

        <slot name="right" />

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
    </NumberFieldRoot>

    <slot name="bottom">
      <AppCollapsable>
        <div v-if="hasError">
          <slot name="error">
            <AppInputFieldError
              :errors="props.errors"
              :class="errorClasses"
              :input-id="inputId"
            />
          </slot>
        </div>

        <div v-else-if="props.hint !== null">
          <slot name="hint">
            <AppInputFieldHint
              :input-id="inputId"
              :hint="props.hint"
              :class="hintClasses"
            />
          </slot>
        </div>
      </AppCollapsable>
    </slot>
  </div>
</template>
