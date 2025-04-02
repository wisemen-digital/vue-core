<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import { CheckboxGroupRoot as RekaCheckboxGroupRoot } from 'reka-ui'

import type { CheckboxGroupProps } from '@/components/checkbox-group/checkboxGroup.props'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
  hint: null,
  label: null,
})

const modelValue = defineModel<AcceptableValue[]>({ required: true })
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <InteractableElement :is-disabled="props.isDisabled">
      <RekaCheckboxGroupRoot
        v-bind="props"
        v-model="modelValue"
      >
        <slot />
      </RekaCheckboxGroupRoot>
    </InteractableElement>
  </PrimitiveElement>
</template>
