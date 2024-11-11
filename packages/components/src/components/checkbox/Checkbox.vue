<script setup lang="ts">
import {
  CheckboxRoot,
  useId,
} from 'reka-ui'
import { computed, ref } from 'vue'

import type { CheckboxProps } from '@/components/checkbox/checkbox.props'
import { checkboxStyle } from '@/components/checkbox/checkbox.style'
import CheckboxIndicator from '@/components/checkbox/CheckboxIndicator.vue'
import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const props = withDefaults(defineProps<CheckboxProps>(), {
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

const inputId = computed<string>(() => props.id ?? useId())

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isIndeterminate = computed<boolean>(() => props.isIndeterminate)
const isChecked = computed<boolean>(() => model.value === true && !isIndeterminate.value)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

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
    class="checkbox-default input-field-label-default input-field-error-default input-field-hint-default icon-default"
  >
    <div :class="boxClasses">
      <CheckboxRoot
        :id="inputId"
        v-model="computedModel"
        :data-test-id="props.testId"
        :disabled="props.isDisabled || props.isReadonly"
        :aria-describedby="ariaDescribedBy"
        :class="rootClasses"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focus="onFocus"
        @blur="onBlur"
      >
        <CheckboxIndicator
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
        </CheckboxIndicator>
      </CheckboxRoot>

      <slot
        v-if="props.label !== null"
        :input-id="inputId"
        name="label"
      >
        <InputFieldLabel
          :for="inputId"
          :label="props.label"
          :is-required="props.isRequired"
          :class="inputLabelClasses"
        />
      </slot>
    </div>
    <div :class="bottomClasses">
      <slot name="bottom">
        <Collapsable>
          <div v-if="hasError">
            <slot name="error">
              <InputFieldError
                :input-id="inputId"
                :errors="props.errors"
                :class="errorClasses"
              />
            </slot>
          </div>

          <div v-else-if="props.hint !== null">
            <slot name="hint">
              <InputFieldHint
                :input-id="inputId"
                :hint="props.hint"
                :class="hintClasses"
              />
            </slot>
          </div>
        </Collapsable>
      </slot>
    </div>
  </div>
</template>
