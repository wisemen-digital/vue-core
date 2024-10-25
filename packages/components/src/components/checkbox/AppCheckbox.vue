<script setup lang="ts">
import {
  CheckboxRoot,
  useId,
} from 'reka-ui'
import { computed, ref } from 'vue'

import AppCheckboxIndicator from '@/components/checkbox/AppCheckboxIndicator.vue'
import type { AppCheckboxProps } from '@/components/checkbox/checkbox.props'
import { checkboxStyle } from '@/components/checkbox/checkbox.style'
import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = withDefaults(defineProps<AppCheckboxProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isIndeterminate: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: null,
  hint: null,
  label: null,
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<boolean>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = checkboxStyle()

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isIndeterminate = computed<boolean>(() => props.isIndeterminate)
const isChecked = computed<boolean>(() => model.value === true && !isIndeterminate.value)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const computedModel = computed<'indeterminate' | boolean>({
  get() {
    if (model.value) {
      return true
    }

    if (props.isIndeterminate) {
      return 'indeterminate'
    }

    return false
  },
  set(value) {
    model.value = value === 'indeterminate' ? false : value
  },
})

const rootClasses = computed<string>(() => style.root({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))

const indicatorClasses = computed<string>(() => style.indicator({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))

const inputLabelClasses = computed<string>(() => style.inputLabel({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))

const errorClasses = computed<string>(() => style.error({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))

const boxClasses = computed<string>(() => style.box({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))

const bottomClasses = computed<string>(() => style.bottom())

const inputId = computed<string>(() => props.id ?? useId())

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
    class="checkbox-variant-default input-field-label-variant-default input-field-error-variant-default input-field-hint-variant-default icon-variant-default"
  >
    <div :class="boxClasses">
      <CheckboxRoot
        :id="inputId"
        v-model="computedModel"
        :data-test-id="props.testId"
        :disabled="props.isDisabled || props.isReadonly"
        :aria-describedby="`${inputId}-error ${inputId}-hint`"
        :class="rootClasses"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focus="onFocus"
        @blur="onBlur"
      >
        <AppCheckboxIndicator
          :is-checked="isChecked"
          :is-indeterminate="isIndeterminate"
          :indicator-classes="indicatorClasses"
        >
          <template #icon-indeterminate>
            <slot name="icon-indeterminate" />
          </template>
          <template #icon-checked>
            <slot name="icon-checked" />
          </template>
        </AppCheckboxIndicator>
      </CheckboxRoot>
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
    </div>
    <div :class="bottomClasses">
      <slot name="bottom">
        <AppCollapsable>
          <div v-if="hasError">
            <slot name="error">
              <AppInputFieldError
                :input-id="inputId"
                :errors="props.errors"
                :class="errorClasses"
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
  </div>
</template>
