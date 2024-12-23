<script setup lang="ts">
import { CheckboxRoot } from 'reka-ui'
import {
  computed,
  ref,
  useId,
} from 'vue'

import { provideCheckboxContext } from '@/components/checkbox/checkbox.context'
import type { CheckboxProps } from '@/components/checkbox/checkbox.props'
import { useCheckboxStyle } from '@/components/checkbox/checkbox.style'
import CheckboxIndicator from '@/components/checkbox/CheckboxIndicator.vue'
import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'
import { useElementAttributeObserver } from '@/composables/element-attribute-observer/elementAttributeObserver.composable'

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
  value: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<boolean | null>({
  default: null,
  required: false,
})

const themeProviderContext = injectThemeProviderContext()

const checkboxStyle = useCheckboxStyle()

const checkboxRootRef = ref<InstanceType<any> | null>(null)
const isChecked = ref<boolean>(false)

useElementAttributeObserver({
  attribute: 'aria-checked',
  element: computed<HTMLElement | null>(() => checkboxRootRef.value?.$el ?? null),
  onChange: (value) => {
    isChecked.value = value === 'true'
  },
})

const computedModel = computed<boolean | 'indeterminate' | null>({
  get() {
    if (model.value === null) {
      return null
    }

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

const inputId = props.id ?? useId()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const rootClasses = computed<string>(() => checkboxStyle.root())

const labelClasses = computed<string>(() => checkboxStyle.label({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => checkboxStyle.hint({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => checkboxStyle.error())

function onFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onUpdateModelValue(value: boolean | 'indeterminate' | null): void {
  computedModel.value = value
}

provideCheckboxContext({
  hasError,
  isChecked: computed<boolean>(() => isChecked.value),
  isDisabled: computed<boolean>(() => props.isDisabled),
  isFocused: computed<boolean>(() => isFocused.value),
  isHovered,
  isIndeterminate: computed<boolean>(() => props.isIndeterminate),
})
</script>

<template>
  <div
    :style="props.styleConfig"
    :class="themeProviderContext.theme.value"
    class="checkbox-default input-field-label-default input-field-error-default input-field-hint-default"
  >
    <div class="grid grid-cols-[min-content_auto] items-center">
      <CheckboxRoot
        :id="inputId"
        ref="checkboxRootRef"
        :model-value="computedModel === null ? undefined : computedModel"
        :data-test-id="props.testId"
        :disabled="props.isDisabled || props.isReadonly"
        :aria-describedby="ariaDescribedBy"
        :class="rootClasses"
        :value="props.value ?? undefined"
        @update:model-value="onUpdateModelValue"
        @focus="onFocus"
        @blur="onBlur"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <slot>
          <CheckboxIndicator />
        </slot>
      </CheckboxRoot>

      <InputFieldLabel
        v-if="props.label !== null"
        :class="labelClasses"
        :is-required="props.isRequired"
        :for="inputId"
        :label="props.label"
      />

      <!-- Spacer element for grid -->
      <span v-else />

      <!-- Spacer element for grid -->
      <span />

      <slot name="bottom">
        <div>
          <Collapsable :is-visible="hasError || props.hint !== null">
            <div v-if="hasError">
              <slot name="error">
                <InputFieldError
                  :errors="props.errors"
                  :class="errorClasses"
                  :input-id="inputId"
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
        </div>
      </slot>
    </div>
  </div>
</template>
