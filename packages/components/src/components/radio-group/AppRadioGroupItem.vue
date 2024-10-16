<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  RadioGroupItem as RekaRadioGroupItem,
  useId,
} from 'reka-ui'
import { computed, ref } from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import type { RadioGroupItem } from '@/types/radioGroup.type'

import AppRadioGroupIndicator from './AppRadioGroupIndicator.vue'
import { useRadioGroupContext } from './radioGroup.context'
import { radioGroupStyle } from './radioGroup.style'

const props = defineProps<{
  item: RadioGroupItem<TValue>
}>()

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = radioGroupStyle()
const context = useRadioGroupContext<TValue>()

const isDisabled = computed<boolean>(() => context.isDisabled.value || (props.item.isDisabled ?? false))
const isHovered = computed<boolean>(() => isMouseOver.value && !isDisabled.value)
const isChecked = computed<boolean>(() => context.isItemChecked(props.item))
const hasError = computed<boolean>(() => context.hasError.value)

const stringValue = computed<string>(() => JSON.stringify(props.item.value))

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

const inputId = computed<string>(() => useId())

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
    <div :class="boxClasses">
      <RekaRadioGroupItem
        :id="inputId"
        :value="stringValue"
        :disabled="isDisabled"
        :aria-describedby="`${inputId}-hint`"
        :class="rootClasses"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @focus="onFocus"
        @blur="onBlur"
      >
        <AppRadioGroupIndicator :indicator-classes="indicatorClasses" />
      </RekaRadioGroupItem>
      <slot
        v-if="props.item.label != null"
        :input-id="inputId"
        name="label"
      >
        <AppInputFieldLabel
          :for="inputId"
          :label="props.item.label"
          :is-required="context.isRequired.value"
          :class="inputLabelClasses"
        />
      </slot>
    </div>
    <div :class="bottomClasses">
      <slot name="bottom">
        <AppCollapsable>
          <div v-if="props.item?.hint != null">
            <slot name="hint">
              <AppInputFieldHint
                :input-id="inputId"
                :hint="props.item.hint"
                :class="hintClasses"
              />
            </slot>
          </div>
        </AppCollapsable>
      </slot>
    </div>
  </div>
</template>
