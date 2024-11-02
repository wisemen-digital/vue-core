<script setup lang="ts">
import { useId } from 'reka-ui'
import { computed, ref } from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import {
  type AppTextFieldProps,
  appTextFieldPropsDefaultValues,
} from '@/components/input-field/text-field/textField.props'
import { textFieldStyle } from '@/components/input-field/text-field/textField.style'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const props = withDefaults(defineProps<AppTextFieldProps>(), appTextFieldPropsDefaultValues)

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
  'left': () => null
  'loader': () => null
  'right': () => null
}>()

const model = defineModel<null | string>({
  required: true,
})

const themeContext = injectThemeProviderContext()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = textFieldStyle()

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

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
    :class="themeContext.theme.value"
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
        :aria-describedby="ariaDescribedBy"
        :type="props.type"
        :required="props.isRequired"
        :aria-invalid="props.errors !== undefined && props.errors !== null"
        @focus="onFocus"
        @blur="onBlur"
      >

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
