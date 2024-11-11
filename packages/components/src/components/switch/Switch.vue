<script setup lang="ts">
import { SwitchRoot, useId } from 'reka-ui'
import { computed, ref } from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import SwitchIndicator from '@/components/switch/SwitchIndicator.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

import type { SwitchProps } from './switch.props'
import { switchStyle } from './switch.style'

const props = withDefaults(defineProps<SwitchProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: null,
  hint: null,
  iconChecked: null,
  iconUnchecked: null,
  label: null,
  size: 'default',
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

const inputId = computed<string>(() => props.id ?? useId())

const style = switchStyle()

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isChecked = computed<boolean>(() => model.value)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const rootClasses = computed<string>(() => style.root({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const indicatorClasses = computed<string>(() => style.indicator({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const inputLabelClasses = computed<string>(() => style.inputLabel({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => style.error({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const boxClasses = computed<string>(() => style.box({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const bottomClasses = computed<string>(() => style.bottom())

const sizeClass = computed<null | string>(() => {
  if (props.size === 'sm') {
    return 'switch-sm'
  }

  if (props.size === 'default') {
    return 'switch-md'
  }

  return null
})

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
    :class="[sizeClass, themeProviderContext.theme.value]"
    class="input-field-label-default input-field-error-default input-field-hint-default icon-default switch-default"
  >
    <div :class="boxClasses">
      <SwitchRoot
        :id="inputId"
        v-model="model"
        :disabled="props.isDisabled || props.isReadonly"
        :class="[rootClasses]"
        :data-test-id="props.testId"
        :aria-describedby="ariaDescribedBy"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focus="onFocus"
        @blur="onBlur"
      >
        <SwitchIndicator
          :is-checked="isChecked"
          :indicator-classes="indicatorClasses"
          :icon-checked="props.iconChecked"
          :icon-unchecked="props.iconUnchecked"
        />
      </SwitchRoot>

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
