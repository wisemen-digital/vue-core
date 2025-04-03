<script setup lang="ts">
import { useId } from 'vue'

import FormField from '@/components/form-field/FormField.vue'
import RadioGroupItemIndicator from '@/components/radio-group-item/parts/RadioGroupItemIndicator.vue'
import RadioGroupItemIndicatorTransition from '@/components/radio-group-item/parts/RadioGroupItemIndicatorTransition.vue'
import RadioGroupItemRoot from '@/components/radio-group-item/parts/RadioGroupItemRoot.vue'
import type { RadioGroupItemEmits } from '@/components/radio-group-item/radioGroupItem.emits'
import type { RadioGroupItemProps } from '@/components/radio-group-item/radioGroupItem.props'

const props = defineProps<RadioGroupItemProps>()

const emit = defineEmits<RadioGroupItemEmits>()

const id = props.id ?? useId()
</script>

<template>
  <FormField
    :error-message="props.errorMessage"
    :hint="props.hint"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :label="props.label"
    :for="id"
    layout="horizontal"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <RadioGroupItemRoot
      v-bind="props"
      :id="id"
      @blur="emit('blur')"
      @focus="emit('focus')"
    >
      <RadioGroupItemIndicator>
        <RadioGroupItemIndicatorTransition />
      </RadioGroupItemIndicator>
    </RadioGroupItemRoot>
  </FormField>
</template>
