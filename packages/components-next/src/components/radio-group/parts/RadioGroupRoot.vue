<script setup lang="ts">
import {
  type AcceptableValue,
  RadioGroupRoot as RekaRadioGroupRoot,
} from 'reka-ui'

import type { RadioGroupProps } from '@/components/radio-group/radioGroup.props'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
  hint: null,
  label: null,
})

const modelValue = defineModel<AcceptableValue>({
  required: true,
})
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <InteractableElement :is-disabled="props.isDisabled">
      <RekaRadioGroupRoot v-model="modelValue">
        <slot />
      </RekaRadioGroupRoot>
    </InteractableElement>
  </PrimitiveElement>
</template>
