<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  useId,
} from 'reka-ui'
import { computed } from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import { provideRadioGroupContext } from '@/components/radio-group/radioGroup.context'
import type { RadioGroupItem } from '@/types/radioGroup.type'

import AppRadioGroupItemDefault from './AppRadioGroupItemDefault.vue'
import AppRadioGroupRoot from './AppRadioGroupRoot.vue'
import {
  type AppRadioGroupProps,
  appRadioGroupPropsDefaultValues,
} from './radioGroup.props'
import { radioGroupStyle } from './radioGroup.style'

const props = withDefaults(defineProps<AppRadioGroupProps<TValue>>(), appRadioGroupPropsDefaultValues)

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
    class="radio-group-variant-default input-field-label-variant-default input-field-error-variant-default input-field-hint-variant-default icon-variant-default"
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

    <AppRadioGroupRoot
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
            <AppRadioGroupItemDefault :item="item" />
          </div>
        </div>
      </slot>
    </AppRadioGroupRoot>

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
