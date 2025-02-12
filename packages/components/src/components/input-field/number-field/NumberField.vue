<script setup lang="ts">
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  useForwardExpose,
  useId,
} from 'reka-ui'
import {
  computed,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import Icon from '@/components/icon/Icon.vue'
import InputField from '@/components/input-field/InputField.vue'
import type { NumberFieldProps } from '@/components/input-field/number-field/numberField.props'
import { useTextFieldStyle } from '@/components/input-field/text-field/textField.style'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'
import { useElementAttributeObserver } from '@/composables/element-attribute-observer/elementAttributeObserver.composable'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<NumberFieldProps>(), {
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
  errors: () => [],
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
  /**
   * Can be used to render a custom hint and error message.
   */
  'bottom': ({ errors, hint }: { errors: string[], hint: string | null }) => void
  /**
   * Can be used to render a custom error message.
   */
  'error': ({ errors }: { errors: string[] }) => void
  /**
   * Can be used to render a custom hint message.
   */
  'hint': ({ hint }: { hint: string | null }) => void
  /**
   * The content to display on the left side.
   */
  'icon-left': () => null
  /**
   * The content to display on the right side.
   */
  'icon-right': () => null
  /**
   * Can be used to render a custom label.
   */
  'label': ({ label }: { label: string | null }) => void
  /**
   * The content to display on the left side. (Will show under the iconLeft slot)
   */
  'left': () => null
  /**
   * Can be used to render a custom loader.
   */
  'loader': () => null
  /**
   * The content to display on the right side. (Will show under the calendar icon)
   */
  'right': () => null
}>()

const model = defineModel<number | null>({
  required: true,
})

const computedModel = computed<number | undefined>({
  get: () => model.value ?? undefined,
  set: (value: number | undefined) => {
    model.value = value ?? null
  },
})

const themeProviderContext = injectThemeProviderContext()
const globalConfigContext = injectConfigContext()

const { t } = useI18n()

const { currentElement: decrementButtonEl, forwardRef: decrementForwardRef } = useForwardExpose()
const { currentElement: incrementButtonEl, forwardRef: incrementForwardRef } = useForwardExpose()

const isDecrementButtonDisabled = ref<boolean>(false)
const isIncrementButtonDisabled = ref<boolean>(false)

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const textFieldStyle = useTextFieldStyle()

if (!props.areControlsHidden) {
  useElementAttributeObserver({
    attribute: 'disabled',
    element: computed<HTMLElement | null>(() => decrementButtonEl.value ?? null),
    onChange: (value) => {
      isDecrementButtonDisabled.value = value !== null
    },
  })

  useElementAttributeObserver({
    attribute: 'disabled',
    element: computed<HTMLElement | null>(() => incrementButtonEl.value ?? null),
    onChange: (value) => {
      isIncrementButtonDisabled.value = value !== null
    },
  })
}

const inputId = props.id ?? useId()
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.isTouched && props.errors.length > 0)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const boxClasses = computed<string>(() => textFieldStyle.box({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputClasses = computed<string>(() => textFieldStyle.input({
  hasError: hasError.value,
  hasIconLeft: props.iconLeft !== null,
  hasIconRight: props.iconRight !== null,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconLeftClasses = computed<string>(() => textFieldStyle.iconLeft({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => textFieldStyle.iconRight({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => textFieldStyle.loaderBox())

const loaderClasses = computed<string>(() => textFieldStyle.loader({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

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
  <InputField
    :input-id="inputId"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :errors="props.errors"
    :hint="props.hint"
    :label="props.label"
    :style="props.styleConfig"
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value)"
    class="text-field-default"
  >
    <template #label="{ label }">
      <slot
        :label="label"
        name="label"
      />
    </template>

    <template #error="{ errors }">
      <slot
        :errors="errors"
        name="error"
      />
    </template>

    <template #hint="{ hint }">
      <slot
        :hint="hint"
        name="hint"
      />
    </template>

    <template #bottom="{ errors, hint }">
      <slot
        :errors="errors"
        :hint="hint"
        name="bottom"
      />
    </template>

    {{ themeProviderContext.theme.value }} - {{ themeProviderContext.appearance.value }}

    <NumberFieldRoot
      v-model="computedModel"
      :default-value="computedModel"
      :locale="globalConfigContext.locale.value"
      :aria-describedby="ariaDescribedBy"
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
          <Icon
            :icon="props.iconLeft"
            :class="iconLeftClasses"
          />
        </slot>

        <slot name="left" />

        <NumberFieldDecrement
          v-if="!props.areControlsHidden"
          :as-child="true"
        >
          <IconButton
            :ref="decrementForwardRef"
            :style-config="{
              '--icon-button-size-default': '2rem',
              '--icon-button-icon-size-default': '1.125rem',
              '--icon-button-ring-color-focus': 'transparent',
              '--icon-button-border-radius-default': 'var(--radius-sm)',
              '--icon-button-bg-color-focus': 'var(--bg-secondary-hover)',
              '--icon-button-bg-color-disabled': 'transparent',
              '--icon-button-border-color-disabled': 'transparent',
            }"
            :is-disabled="props.isDisabled || isDecrementButtonDisabled"
            :label="t('component.number_field.decrement')"
            class="ml-[0.1875rem] flex-shrink-0"
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
            :autocomplete="props.autocomplete"
            :aria-describedby="ariaDescribedBy"
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
          <IconButton
            :ref="incrementForwardRef"
            :style-config="{
              '--icon-button-size-default': '2rem',
              '--icon-button-icon-size-default': '1.125rem',
              '--icon-button-ring-color-focus': 'transparent',
              '--icon-button-border-radius-default': 'var(--radius-sm)',
              '--icon-button-bg-color-focus': 'var(--bg-secondary-hover)',
              '--icon-button-bg-color-disabled': 'transparent',
              '--icon-button-border-color-disabled': 'transparent',
            }"
            :is-disabled="props.isDisabled || isIncrementButtonDisabled"
            :label="t('component.number_field.increment')"
            icon="plus"
            size="sm"
            variant="tertiary"
            class="mr-[0.1875rem] flex-shrink-0"
          />
        </NumberFieldIncrement>

        <slot name="right" />

        <div
          v-if="props.isLoading"
          :class="loaderBoxClasses"
        >
          <slot name="loader">
            <Spinner :class="loaderClasses" />
          </slot>
        </div>

        <slot
          v-else-if="props.iconRight !== null"
          name="icon-right"
        >
          <Icon
            :icon="props.iconRight"
            :class="iconRightClasses"
          />
        </slot>
      </div>
    </NumberFieldRoot>
  </InputField>
</template>
