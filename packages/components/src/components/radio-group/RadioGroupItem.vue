<script setup lang="ts">
import {
  RadioGroupIndicator,
  RadioGroupItem,
} from 'reka-ui'
import {
  computed,
  ref,
  useId,
} from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import type { RadioGroupItemProps } from '@/components/radio-group/radioGroupItem.props'
import { useRadioGroupItemStyle } from '@/components/radio-group/radioGroupItem.style'

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
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

const radioGroupItemStyle = useRadioGroupItemStyle()

const inputId = props.id ?? useId()

const isChecked = ref<boolean>(false)
const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const labelClasses = computed<string>(() => radioGroupItemStyle.label({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const hintClasses = computed<string>(() => radioGroupItemStyle.hint({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => radioGroupItemStyle.error())

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
</script>

<template>
  <div class="radio-group-item-default input-field-label-default input-field-error-default input-field-hint-default">
    <div class="grid grid-cols-[min-content_auto] items-center">
      <slot>
        <RadioGroupItem
          :id="inputId"
          :data-test-id="props.testId"
          :aria-describedby="ariaDescribedBy"
          :disabled="props.isDisabled"
          :readonly="props.isReadonly"
          :required="props.isRequired"
          :value="props.value"
          @focus="onFocus"
          @blur="onBlur"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        >
          <RadioGroupIndicator>
            x
          </RadioGroupIndicator>
        </RadioGroupItem>
      </slot>

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
