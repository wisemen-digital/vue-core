<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  useId,
} from 'reka-ui'
import { computed } from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
import { provideRadioGroupContext } from '@/components/radio-group-old/radioGroup.context'
import type { RadioGroupItem } from '@/types/radioGroup.type'

import type { RadioGroupProps } from './radioGroup.props'
import { radioGroupStyle } from './radioGroup.style'
import RadioGroupItemDefault from './RadioGroupItemDefault.vue'
import RadioGroupRoot from './RadioGroupRoot.vue'

const props = withDefaults(defineProps<RadioGroupProps<TValue>>(), {
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

const style = radioGroupStyle()
const model = defineModel<TValue | null>({
  required: true,
})
const inputId = computed<string>(() => props.id ?? useId())

const computedModel = computed<null | string>({
  get: () => model.value !== null ? JSON.stringify(model.value) : null,
  set: (value: null | string) => {
    model.value = value !== null ? JSON.parse(value) as TValue : null
  },
})

const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const errorClasses = computed<string>(() => style.error())

const inputLabelClasses = computed<string>(() => style.inputLabel({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
}))

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
}))

function isItemChecked(item: RadioGroupItem<TValue>): boolean {
  return JSON.stringify(item.value) === JSON.stringify(model.value)
}

provideRadioGroupContext({
  hasError: computed<boolean>(() => hasError.value),
  isDisabled: computed<boolean>(() => props.isDisabled),
  isItemChecked,
  isRequired: computed<boolean>(() => props.isRequired),
  isTouched: computed<boolean>(() => props.isTouched),
  items: computed<RadioGroupItem<TValue>[]>(() => props.items),
  model: computed<TValue | null>(() => model.value),
})
</script>

<template>
  <div
    :style="props.styleConfig"
    class="radio-group-default input-field-label-default input-field-error-default input-field-hint-default icon-default"
  >
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

    <RadioGroupRoot
      v-model="computedModel"
      :is-disabled="props.isDisabled"
    >
      <slot
        :items="items"
        name="items"
      >
        <div class="flex flex-col gap-y-1">
          <div
            v-for="item of props.items"
            :key="item.label"
          >
            <RadioGroupItemDefault :item="item" />
          </div>
        </div>
      </slot>
    </RadioGroupRoot>

    <slot name="bottom">
      <Collapsable>
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
    </slot>
  </div>
</template>
