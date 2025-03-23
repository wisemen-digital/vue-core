<script setup lang="ts">
import type { FormFieldProps } from '@/packages/@next/form-field/formField.props'
import type {
  FormFieldSlots,
} from '@/packages/@next/form-field/formField.slots'
import FormFieldError from '@/packages/@next/form-field/parts/FormFieldError.vue'
import FormFieldHint from '@/packages/@next/form-field/parts/FormFieldHint.vue'
import FormFieldLabel from '@/packages/@next/form-field/parts/FormFieldLabel.vue'
import FormFieldRoot from '@/packages/@next/form-field/parts/FormFieldRoot.vue'

const props = withDefaults(defineProps<FormFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
  hint: null,
  label: null,
})

defineSlots<FormFieldSlots>()
</script>

<template>
  <FormFieldRoot v-bind="props">
    <FormFieldLabel>
      <template #label-leading>
        <slot name="label-leading" />
      </template>

      <template #label-trailing>
        <slot name="label-trailing" />
      </template>

      <template #label-right>
        <slot name="label-right" />
      </template>
    </FormFieldLabel>

    <slot />

    <FormFieldError />
    <FormFieldHint />
  </FormFieldRoot>
</template>
