<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import { RadioGroupRoot as RekaRadioGroupRoot } from 'reka-ui'
import {
  computed,
  ref,
} from 'vue'

import type { RadioGroupEmits } from '@/components/radio-group/radioGroup.emits'
import type { RadioGroupProps } from '@/components/radio-group/radioGroup.props'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useFocusOut } from '@/composables/focus-out/focusOut.composable'

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

const emit = defineEmits<RadioGroupEmits>()

const modelValue = defineModel<TValue>({ required: true })

const radioGroupRootRef = ref<InstanceType<typeof RekaRadioGroupRoot> | null>(null)

useFocusOut(
  computed<HTMLElement | null>(() => radioGroupRootRef.value?.$el ?? null),
  () => {
    emit('blur')
  },
)
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
    :aria-invalid="props.errors.length > 0"
  >
    <InteractableElement :is-disabled="props.isDisabled">
      <RekaRadioGroupRoot
        ref="radioGroupRootRef"
        v-model="modelValue"
      >
        <slot />
      </RekaRadioGroupRoot>
    </InteractableElement>
  </PrimitiveElement>
</template>
