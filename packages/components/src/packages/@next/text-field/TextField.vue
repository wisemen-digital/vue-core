<script setup lang="ts" generic="TValue extends string">
import { useId } from 'vue'

import FormField from '@/packages/@next/form-field/FormField.vue'
import TextFieldIconLeft from '@/packages/@next/text-field/parts/TextFieldIconLeft.vue'
import TextFieldIconRight from '@/packages/@next/text-field/parts/TextFieldIconRight.vue'
import TextFieldInput from '@/packages/@next/text-field/parts/TextFieldInput.vue'
import TextFieldLoader from '@/packages/@next/text-field/parts/TextFieldLoader.vue'
import TextFieldRoot from '@/packages/@next/text-field/parts/TextFieldRoot.vue'
import type { TextFieldEmits, TextFieldProps } from '@/packages/@next/text-field/textField.props'
import type { TextFieldSlots } from '@/packages/@next/text-field/textField.slots'

const props = defineProps<TextFieldProps>()
const emit = defineEmits<TextFieldEmits>()

defineSlots<TextFieldSlots>()

const modelValue = defineModel<TValue | null>({
  required: true,
})

const id = props.id ?? useId()
</script>

<template>
  <FormField
    :errors="props.errors"
    :hint="props.hint"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :label="props.label"
    :for="id"
  >
    <template #label-leading>
      <slot name="label-leading" />
    </template>

    <template #label-trailing>
      <slot name="label-trailing" />
    </template>

    <template #label-right>
      <slot name="label-right" />
    </template>

    <TextFieldRoot
      v-bind="props"
      :id="id"
      v-model="modelValue"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
    >
      <slot name="left" />
      <TextFieldIconLeft />
      <TextFieldInput />
      <TextFieldLoader />
      <TextFieldIconRight />
      <slot name="right" />
    </TextFieldRoot>
  </FormField>
</template>
