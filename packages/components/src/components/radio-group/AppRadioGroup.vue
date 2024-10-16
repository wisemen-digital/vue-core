<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import { computed } from 'vue'

import type { RadioGroupItem } from '@/types/radioGroup.type'

import AppRadioGroupItem from './AppRadioGroupItem.vue'
import AppRadioGroupRoot from './AppRadioGroupRoot.vue'
import { useProvideRadioGroupContext } from './radioGroup.context'
import {
  type AppRadioGroupProps,
  appRadioGroupPropsDefaultValues,
} from './radioGroup.props'

const props = withDefaults(defineProps<AppRadioGroupProps<TValue>>(), appRadioGroupPropsDefaultValues)

const model = defineModel<TValue | null>({
  required: true,
})
const computedModel = computed<null | string>({
  get: () => model.value !== null ? JSON.stringify(model.value) : null,
  set: (value: null | string) => {
    model.value = value !== null ? JSON.parse(value) as TValue : null
  },
})

const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

useProvideRadioGroupContext({
  hasError,
  isDisabled: computed<boolean>(() => props.isDisabled),
  isRequired: computed<boolean>(() => props.isRequired),
  isTouched: computed<boolean>(() => props.isTouched),
  items: computed<RadioGroupItem<TValue>[]>(() => props.items),
  model,
})
</script>

<template>
  <AppRadioGroupRoot
    v-model="computedModel"
    class="flex flex-col gap-2"
  >
    <div
      v-for="item of props.items"
      :key="item.label"
    >
      <AppRadioGroupItem
        :id="item.value"
        :data-test-id="item.testId"
        :item="item"
      />
    </div>
  </AppRadioGroupRoot>
</template>
